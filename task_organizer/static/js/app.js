const modal = document.getElementById("taskModal");
const openBtn = document.getElementById("openCreateModal");
const cancelBtn = document.getElementById("cancelModal");
const form = document.getElementById("taskForm");
const modalTitle = document.getElementById("modalTitle");

openBtn.addEventListener("click", () => {
  form.action = "/tasks";
  form.reset();
  modalTitle.textContent = "Create Task";
  modal.showModal();
});

cancelBtn.addEventListener("click", () => modal.close());

for (const editBtn of document.querySelectorAll(".edit-btn")) {
  editBtn.addEventListener("click", () => {
    form.action = `/tasks/${editBtn.dataset.id}/update`;
    modalTitle.textContent = "Edit Task";

    form.elements.title.value = editBtn.dataset.title || "";
    form.elements.client_name.value = editBtn.dataset.client_name || "";
    form.elements.description.value = editBtn.dataset.description || "";
    form.elements.status.value = editBtn.dataset.status || "todo";
    form.elements.priority.value = editBtn.dataset.priority || "Medium";
    form.elements.due_date.value = editBtn.dataset.due_date || "";

    modal.showModal();
  });
}

let draggingCard = null;
for (const card of document.querySelectorAll(".task-card")) {
  card.addEventListener("dragstart", () => {
    draggingCard = card;
    card.classList.add("dragging");
  });
  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
    draggingCard = null;
  });
}

for (const list of document.querySelectorAll(".task-list")) {
  list.addEventListener("dragover", (e) => e.preventDefault());
  list.addEventListener("drop", async (e) => {
    e.preventDefault();
    if (!draggingCard) return;

    const status = list.dataset.status;
    const taskId = draggingCard.dataset.id;

    list.appendChild(draggingCard);

    await fetch(`/api/tasks/${taskId}/move`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  });
}
