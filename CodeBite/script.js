document.getElementById('addButton').addEventListener('click', addTask);

function addTask() {
  // Get the task input value
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  // Create a new list item (li) element
  const li = document.createElement('li');
  li.className = 'taskItem';

  // Create a checkbox for marking the task as complete
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', toggleComplete);

  // Create a text node for the task text
  const taskTextNode = document.createTextNode(taskText);

  // Add the checkbox and task text to the list item
  li.appendChild(checkbox);
  li.appendChild(taskTextNode);

  // Append the new list item to the task list
  document.getElementById('taskList').appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

function toggleComplete(event) {
  const listItem = event.target.parentNode;
  if (event.target.checked) {
    listItem.classList.add('completed');
  } else {
    listItem.classList.remove('completed');
  }
}
