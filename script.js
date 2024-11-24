const taskForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Handle form submission
taskForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload
  const taskValue = taskInput.value.trim();
  if (!taskValue) {
    alert('Please enter a task.');
    return;
  }
  addTask(taskValue);
  taskInput.value = ''; // Clear input field
});

// Add a new task
function addTask(task) {
  const li = document.createElement('li');
  li.className = 'task-item';

  li.innerHTML = `
    <input type="checkbox" class="check-task">
    <span>${task}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  // Handle task completion
  li.querySelector('.check-task').addEventListener('change', function () {
    li.classList.toggle('complete');
  });

  // Handle task editing
  li.querySelector('.edit-btn').addEventListener('click', function () {
    const newTask = prompt('Edit Task:', task);
    if (newTask) li.querySelector('span').textContent = newTask;
  });

  // Handle task deletion
  li.querySelector('.delete-btn').addEventListener('click', function () {
    li.remove();
  });

  taskList.appendChild(li);
}

// Toggle dark mode
document.getElementById('toggle-theme').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});
