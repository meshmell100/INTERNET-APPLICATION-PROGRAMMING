document.addEventListener('DOMContentLoaded', function() {
    // Query for the submit button and input task field
    const submit = document.getElementById('submitButton');
    const newTask = document.getElementById('taskInput');
    
  
    // Disable the submit button by default
    submit.disabled = true;
  
    // Listen for input to be typed into the input field
    newTask.addEventListener('input', function() {
      // Enable submit button if input field is not empty, otherwise disable it
      submit.disabled = newTask.value.trim() === '';
    });
  
    // Listen for submission of form
    document.getElementById('taskForm').addEventListener('submit', function(event) {
      // Prevent default form submission
      event.preventDefault();
  
      // Find the task the user just submitted
      const task = newTask.value.trim();
  
      // Create list item for the new task and add the task to it
      const listItem = document.createElement('li');
      listItem.textContent = task;
  
      // Add new element to our unordered list
      document.getElementById('taskList').appendChild(listItem);
  
      // Clear input field
      newTask.value = '';
  
      // Disable submit button after task is submitted
      submit.disabled = true;
    });
  
    // Prevent default form submission
    document.getElementById('taskForm').addEventListener('submit', function() {
      return false;
    });
  });
