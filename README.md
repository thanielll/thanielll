# Freelancer Task Organizer

A simple Trello-like personal task organizer for freelancers managing multiple client projects.

## Features

- Kanban board with **To Do / In Progress / Blocked / Done** columns.
- Drag-and-drop task movement across columns.
- Add, edit, and delete tasks.
- Track client name, due date, priority, and notes.
- Local SQLite database (your data stays on your machine).
- Works with Python standard library (no external runtime packages).

## Quick start (Windows, macOS, Linux)

1. Install Python 3.10+.
2. In this folder, optionally create a virtual environment:

   ```bash
   python -m venv .venv
   # Windows PowerShell:
   .venv\Scripts\Activate.ps1
   # macOS/Linux:
   source .venv/bin/activate
   ```

3. Start the app:

   ```bash
   python run.py
   ```

4. Open your browser at:

   ```
   http://localhost:5000
   ```

## Optional: Create desktop executable

You can package this into a standalone desktop executable with PyInstaller:

```bash
pip install pyinstaller
pyinstaller --onefile --name freelancer-task-organizer run.py
```

The binary appears in `dist/`.

## Project structure

- `task_organizer/server.py` – web server, task APIs, and SQLite logic.
- `task_organizer/static/css/styles.css` – styling.
- `task_organizer/static/js/app.js` – modal + drag/drop behavior.
- `tests/test_app.py` – basic test coverage.
