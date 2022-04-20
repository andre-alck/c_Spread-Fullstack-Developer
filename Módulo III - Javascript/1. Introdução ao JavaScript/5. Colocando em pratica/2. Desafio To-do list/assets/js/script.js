const form = document.getElementById("task-form");
const task_list = document.getElementById("tasks");

form.onsubmit = function (e) {
    e.preventDefault();
    const input_field = document.getElementById("task-input");
    addTask(input_field.value);
    form.reset();
};

function addTask(description) {
    const task_container = document.createElement("div");
    const new_task = document.createElement("input");
    const task_label = document.createElement("label");
    const task_description_node = document.createTextNode(description);

    new_task.setAttribute("type", "checkbox");
    new_task.setAttribute("name", "description");
    new_task.setAttribute("id", "description");

    task_label.setAttribute("for", description);
    task_label.appendChild(task_description_node);

    task_container.classList.add("task-item");
    task_container.appendChild(new_task);
    task_container.appendChild(task_label);

    task_list.appendChild(task_container);
}
