 document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const pendingTasks = document.getElementById("pendingTasks");
    const completedTasks = document.getElementById("completedTasks");

    // Add task
    addTaskButton.addEventListener("click", () => {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            addTask(taskValue);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    });

    // Add task to Pending Tasks list
    function addTask(task) {
        const li = document.createElement("li");
        li.textContent = task;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add("completeButton");
        completeButton.addEventListener("click", () => {
            pendingTasks.removeChild(li);
            moveToCompleted(task);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", () => {
            pendingTasks.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        pendingTasks.appendChild(li);
    }

    // Move task to Completed Tasks list
    function moveToCompleted(task) {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", () => {
            completedTasks.removeChild(li);
        });

        li.appendChild(deleteButton);
        completedTasks.appendChild(li);
    }
});