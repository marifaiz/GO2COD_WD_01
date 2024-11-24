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
document.getElementById('all-tasks').addEventListener('click', function () {
  filterTasks('all');
});

document.getElementById('completed-tasks').addEventListener('click', function () {
  filterTasks('completed');
});

document.getElementById('pending-tasks').addEventListener('click', function () {
  filterTasks('pending');
});
function filterTasks(filter) {
  const tasks = document.querySelectorAll('.task-item'); // Select all task items
  tasks.forEach(task => {
    const isCompleted = task.querySelector('.check-task').checked; // Check task status

    if (filter === 'completed' && !isCompleted) {
      task.style.display = 'none'; // Hide pending tasks
    } else if (filter === 'pending' && isCompleted) {
      task.style.display = 'none'; // Hide completed tasks
    } else {
      task.style.display = ''; // Show all tasks
    }
  });
}
const filterButtons = document.querySelectorAll('#filters button');
filterButtons.forEach(button => {
  button.addEventListener('click', function () {
    filterButtons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
    this.classList.add('active'); // Add active class to the clicked button
  });
});
