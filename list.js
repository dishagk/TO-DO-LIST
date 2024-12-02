// list.js

document.getElementById("addTaskBtn").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const todoList = document.getElementById("todoList");

        // Create a new list item for the task
        const listItem = document.createElement("li");

        // Add the task text
        const taskText = document.createElement("span");
        taskText.textContent = taskValue;

        // Create the 'Mark Complete' button
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Mark Complete";
        completeBtn.addEventListener("click", function () {
            listItem.removeChild(completeBtn); // Remove the button
            document.getElementById("completedList").appendChild(listItem); // Move to completed list
        });

        // Append task text and button to the list item
        listItem.appendChild(taskText);
        listItem.appendChild(completeBtn);

        // Append the list item to the To-Do List
        todoList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
});
