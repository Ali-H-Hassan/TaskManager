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

        li.appendChild(document.createTextNode(task.name));

        const taskDiv = document.createElement('div');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function () {
            task.completed = checkbox.checked;
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            newName.style.display = 'inline';
            newName.focus();
            editButton.style.display = 'none';
            saveButton.style.display = 'inline';
        });

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.style.display = 'none';
        saveButton.addEventListener('click', function () {
            task.name = newName.value;
            newName.style.display = 'none';
            editButton.style.display = 'inline';
            saveButton.style.display = 'none';
            updateTaskList();
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

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(newName);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(saveButton);
        taskDiv.appendChild(deleteButton);

        li.appendChild(taskDiv);
        taskList.appendChild(li);
    });
}
updateTaskList();
