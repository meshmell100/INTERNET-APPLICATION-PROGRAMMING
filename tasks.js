//references to the form, input and submit field
const newtask = document.getElementById('task');
const submit = document.getElementById('submit');
const form = document.getElementById('taskform');

//disabling the submit button
submit.disabled = true;

//listen for input
newtask.addEventListener('input', function(){
    //check if input field is empty and enable submit button
    submit.disabled = !newtask.value.trim();
});

//listen for submission
form.addEventListener('submit', function(event){
    document.getElementById("task_container").style.backgroundColor = "white";
    console.log('form submitted');
    // Prevent the default submission of the form
    event.preventDefault();

    //get the task that the user has just submitted
    const users_input = newtask.value.trim();

    if(users_input){
        // create a new list item for the new task 
        const new_task_item = document.createElement('li');
        new_task_item.textContent = users_input;
        
        //lets add the element to our list
        document.getElementById('tasklist').appendChild(new_task_item);

        //clear input field
        newtask.value = '';

        //disable the submit button

        submit.disabled = true;
    }
});
