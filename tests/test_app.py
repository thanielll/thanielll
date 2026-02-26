import json
import threading
import time
from http.client import HTTPConnection
from pathlib import Path

from task_organizer.server import ensure_db, make_handler
from http.server import ThreadingHTTPServer


def start_server(db_path: Path):
    handler = make_handler(db_path)
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    time.sleep(0.1)
    return server


def test_create_and_move_task(tmp_path: Path):
    db_path = tmp_path / "test.db"
    ensure_db(db_path)
    server = start_server(db_path)
    conn = HTTPConnection("127.0.0.1", server.server_port)

    payload = "title=Finish+logo+concepts&client_name=Acme&description=Prepare+3+ideas&status=todo&priority=High&due_date=2026-01-15"
    conn.request("POST", "/tasks", body=payload, headers={"Content-Type": "application/x-www-form-urlencoded"})
    response = conn.getresponse()
    assert response.status == 303

    conn.request("GET", "/")
    home = conn.getresponse()
    body = home.read().decode("utf-8")
    assert "Finish logo concepts" in body

    conn.request(
        "POST",
        "/api/tasks/1/move",
        body=json.dumps({"status": "in_progress"}),
        headers={"Content-Type": "application/json"},
    )
    move = conn.getresponse()
    assert move.status == 200
    assert json.loads(move.read().decode("utf-8"))["ok"] is True

    conn.close()
    server.shutdown()


def test_reject_invalid_status(tmp_path: Path):
    db_path = tmp_path / "test.db"
    ensure_db(db_path)
    server = start_server(db_path)
    conn = HTTPConnection("127.0.0.1", server.server_port)

    conn.request(
        "POST",
        "/api/tasks/1/move",
        body=json.dumps({"status": "random"}),
        headers={"Content-Type": "application/json"},
    )
    bad = conn.getresponse()
    assert bad.status == 400

    conn.close()
    server.shutdown()
