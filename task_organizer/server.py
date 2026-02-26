from __future__ import annotations

import html
import json
import sqlite3
from contextlib import closing
from datetime import datetime
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "tasks.db"
STATIC_DIR = BASE_DIR / "static"

STATUS_COLUMNS = ["todo", "in_progress", "blocked", "done"]
PRIORITY_LEVELS = ["Low", "Medium", "High", "Urgent"]


def get_connection(db_path: Path) -> sqlite3.Connection:
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    return conn


def ensure_db(db_path: Path) -> None:
    with closing(get_connection(db_path)) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                client_name TEXT,
                description TEXT,
                status TEXT NOT NULL DEFAULT 'todo',
                priority TEXT NOT NULL DEFAULT 'Medium',
                due_date TEXT,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            )
            """
        )
        conn.commit()


def safe_date(value: str | None) -> str | None:
    if not value:
        return None
    try:
        datetime.strptime(value, "%Y-%m-%d")
    except ValueError:
        return None
    return value


def list_tasks(db_path: Path):
    with closing(get_connection(db_path)) as conn:
        rows = conn.execute(
            """
            SELECT id, title, client_name, description, status, priority, due_date
            FROM tasks
            ORDER BY
                CASE priority
                    WHEN 'Urgent' THEN 1
                    WHEN 'High' THEN 2
                    WHEN 'Medium' THEN 3
                    ELSE 4
                END,
                COALESCE(due_date, '9999-12-31'),
                id DESC
            """
        ).fetchall()
        return [dict(r) for r in rows]


def make_handler(db_path: Path):
    class OrganizerHandler(BaseHTTPRequestHandler):
        def do_GET(self):
            parsed = urlparse(self.path)
            if parsed.path == "/":
                return self.render_dashboard()
            if parsed.path.startswith("/static/"):
                return self.serve_static(parsed.path)
            self.send_error(HTTPStatus.NOT_FOUND)

        def do_POST(self):
            parsed = urlparse(self.path)
            if parsed.path == "/tasks":
                return self.create_task()
            if parsed.path.endswith("/update"):
                return self.update_task(parsed.path)
            if parsed.path.endswith("/delete"):
                return self.delete_task(parsed.path)
            if parsed.path.startswith("/api/tasks/") and parsed.path.endswith("/move"):
                return self.move_task(parsed.path)
            self.send_error(HTTPStatus.NOT_FOUND)

        def read_form(self):
            length = int(self.headers.get("Content-Length", "0"))
            body = self.rfile.read(length).decode("utf-8")
            parsed = parse_qs(body)
            return {k: v[0] for k, v in parsed.items()}

        def redirect_home(self):
            self.send_response(HTTPStatus.SEE_OTHER)
            self.send_header("Location", "/")
            self.end_headers()

        def render_dashboard(self):
            tasks = list_tasks(db_path)
            grouped = {s: [] for s in STATUS_COLUMNS}
            for task in tasks:
                grouped[task["status"]].append(task)

            columns_html = "".join(render_column(c, grouped[c]) for c in STATUS_COLUMNS)
            status_options = "".join(
                f'<option value="{s}">{s.replace("_", " ").title()}</option>' for s in STATUS_COLUMNS
            )
            priority_options = "".join(f'<option value="{p}">{p}</option>' for p in PRIORITY_LEVELS)
            page = HTML_PAGE.format(columns=columns_html, status_options=status_options, priority_options=priority_options)

            data = page.encode("utf-8")
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)

        def create_task(self):
            form = self.read_form()
            title = form.get("title", "").strip()
            if not title:
                return self.redirect_home()
            with get_connection(db_path) as conn:
                conn.execute(
                    """
                    INSERT INTO tasks (title, client_name, description, status, priority, due_date, created_at, updated_at)
                    VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
                    """,
                    (
                        title,
                        form.get("client_name", "").strip(),
                        form.get("description", "").strip(),
                        form.get("status", "todo"),
                        form.get("priority", "Medium"),
                        safe_date(form.get("due_date")),
                    ),
                )
                conn.commit()
            self.redirect_home()

        def update_task(self, path: str):
            parts = path.strip("/").split("/")
            task_id = int(parts[1])
            form = self.read_form()
            with get_connection(db_path) as conn:
                conn.execute(
                    """
                    UPDATE tasks
                    SET title=?, client_name=?, description=?, status=?, priority=?, due_date=?, updated_at=CURRENT_TIMESTAMP
                    WHERE id=?
                    """,
                    (
                        form.get("title", "").strip(),
                        form.get("client_name", "").strip(),
                        form.get("description", "").strip(),
                        form.get("status", "todo"),
                        form.get("priority", "Medium"),
                        safe_date(form.get("due_date")),
                        task_id,
                    ),
                )
                conn.commit()
            self.redirect_home()

        def delete_task(self, path: str):
            task_id = int(path.strip("/").split("/")[1])
            with get_connection(db_path) as conn:
                conn.execute("DELETE FROM tasks WHERE id=?", (task_id,))
                conn.commit()
            self.redirect_home()

        def move_task(self, path: str):
            task_id = int(path.strip("/").split("/")[2])
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length).decode("utf-8")
            payload = json.loads(raw or "{}")
            status = payload.get("status")
            if status not in STATUS_COLUMNS:
                return self.json_response({"ok": False, "error": "Invalid status"}, HTTPStatus.BAD_REQUEST)
            with get_connection(db_path) as conn:
                conn.execute("UPDATE tasks SET status=?, updated_at=CURRENT_TIMESTAMP WHERE id=?", (status, task_id))
                conn.commit()
            self.json_response({"ok": True}, HTTPStatus.OK)

        def serve_static(self, path: str):
            rel = path.replace("/static/", "", 1)
            file_path = STATIC_DIR / rel
            if not file_path.exists() or not file_path.is_file():
                return self.send_error(HTTPStatus.NOT_FOUND)
            content_type = "text/plain"
            if file_path.suffix == ".css":
                content_type = "text/css"
            elif file_path.suffix == ".js":
                content_type = "application/javascript"
            data = file_path.read_bytes()
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)

        def json_response(self, payload: dict, status: HTTPStatus):
            data = json.dumps(payload).encode("utf-8")
            self.send_response(status)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)

    return OrganizerHandler


def render_column(status: str, tasks: list[dict]) -> str:
    cards = "".join(render_card(task) for task in tasks)
    return f"""
    <article class=\"column\" data-status=\"{status}\">
      <h2>{status.replace('_', ' ').title()}</h2>
      <div class=\"task-list\" data-status=\"{status}\">{cards}</div>
    </article>
    """


def render_card(task: dict) -> str:
    title = html.escape(task["title"] or "")
    client = html.escape(task.get("client_name") or "")
    desc = html.escape(task.get("description") or "")
    due = html.escape(task.get("due_date") or "")
    priority = html.escape(task.get("priority") or "Medium")
    status = html.escape(task.get("status") or "todo")
    return f"""
    <div class=\"task-card\" draggable=\"true\" data-id=\"{task['id']}\">
      <div class=\"task-header\"><h3>{title}</h3><span class=\"badge {priority.lower()}\">{priority}</span></div>
      <p class=\"client\">👤 {client if client else 'No client set'}</p>
      <p>{desc if desc else 'No details yet.'}</p>
      <p class=\"meta\">{'📅 ' + due if due else 'No deadline'}</p>
      <div class=\"actions\">
        <button class=\"link-btn edit-btn\"
          data-id=\"{task['id']}\"
          data-title=\"{title}\"
          data-client_name=\"{client}\"
          data-description=\"{desc}\"
          data-status=\"{status}\"
          data-priority=\"{priority}\"
          data-due_date=\"{due}\">Edit</button>
        <form method=\"post\" action=\"/tasks/{task['id']}/delete\"><button class=\"link-btn delete-btn\" type=\"submit\">Delete</button></form>
      </div>
    </div>
    """


HTML_PAGE = """<!doctype html>
<html lang=\"en\">
<head>
<meta charset=\"UTF-8\" />
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
<title>Freelancer Task Organizer</title>
<link rel=\"stylesheet\" href=\"/static/css/styles.css\" />
</head>
<body>
<header class=\"topbar\"><div><h1>Freelancer Task Organizer</h1><p>Plan client work in a Trello-style board.</p></div><button id=\"openCreateModal\" class=\"primary-btn\">+ Add Task</button></header>
<main><section class=\"board\">{columns}</section></main>
<dialog id=\"taskModal\"><form id=\"taskForm\" method=\"post\" action=\"/tasks\"><h2 id=\"modalTitle\">Create Task</h2>
<label>Title <input type=\"text\" name=\"title\" required /></label>
<label>Client Name <input type=\"text\" name=\"client_name\" /></label>
<label>Details <textarea name=\"description\" rows=\"4\"></textarea></label>
<label>Status <select name=\"status\">{status_options}</select></label>
<label>Priority <select name=\"priority\">{priority_options}</select></label>
<label>Due Date <input type=\"date\" name=\"due_date\" /></label>
<div class=\"modal-actions\"><button type=\"button\" class=\"secondary-btn\" id=\"cancelModal\">Cancel</button><button type=\"submit\" class=\"primary-btn\">Save Task</button></div>
</form></dialog>
<script src=\"/static/js/app.js\"></script>
</body>
</html>"""


def run_server(host: str = "0.0.0.0", port: int = 5000, db_path: Path = DB_PATH):
    ensure_db(db_path)
    handler = make_handler(db_path)
    server = ThreadingHTTPServer((host, port), handler)
    print(f"Task organizer running at http://{host}:{port}")
    server.serve_forever()
