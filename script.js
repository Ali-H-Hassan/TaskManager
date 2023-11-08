const tasks = [];
const taskInput = document.getElementById('textInput');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTask.addEventListener('click', function () {
    const taskName = taskInput.value;
    if (taskName.trim() !== '') {
        tasks.push({ name: taskName, completed: false });
        taskInput.value = '';
        updateTaskList();
    }
});

function updateTaskList() {
    taskList.innerHTML = '';

    tasks.forEach(function (task, i) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function () {
            task.completed = checkbox.checked;
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            tasks.splice(i, 1);
            updateTaskList();
        });

        const newName = document.createElement('input');
        newName.type = 'text';
        newName.value = task.name;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            newName.style.display = 'inline';
            newName.focus();
            task.name = newName.value;
            newName.style.display = 'none';
            taskList.removeChild(li);
            tasks.splice(i, 1);
            tasks.splice(i, 0, { name: newName.value, completed: task.completed });
            updateTaskList();
        });

        li.appendChild(checkbox);
        li.appendChild(newName);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(document.createTextNode(task.name)); // Display the task name

        taskList.appendChild(li);
    });
}

// Initialize the task list
updateTaskList();
