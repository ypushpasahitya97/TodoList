function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var taskList = document.getElementById("todo-list");
        var taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        var taskDescription = document.createElement("span");
        taskDescription.textContent = taskText;

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            var deleteButton = taskItem.querySelector('.delete-button');
            if (this.checked) {
                taskDescription.classList.add("completed");
                deleteButton.style.display = "inline";
            } else {
                taskDescription.classList.remove("completed");
                deleteButton.style.display = "none";
            }
        });

        var deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = 'x';
        deleteButton.style.display = "none"; // Initially hide delete button
        deleteButton.addEventListener("click", function() {
            taskItem.remove();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskDescription);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}
