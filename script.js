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
            tasks[i].completed = checkbox.checked;
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            tasks.splice(i, 1);
            updateTaskList();
        });

        li.textContent = task.name;
        li.appendChild(checkbox);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
