
// Toggle theme function 
function changeTheme () {
    document.body.classList.toggle('light');
}

const todoInput = document.querySelector("#todo-input");
// Array of objects to be used in later functions
const todos = [];

// Funtction to hadle the user input when they press enter
function handleTodoInput(event) {
    // Check if the user pressed the enter key
    if (event.key === "Enter" || event.keyCode === 13) {
        // Add the new todo to the todos array
        todos.push({value: event.target.value, checked: false});
        //Call the newTodo function to create a new todo item in the html
        newTodo(event.target.value);
        //Clear the input field after new todo item is added
        event.target.value = "";
    }
}

// Add event listener to the input field to call the handleTodoInput function when enter is pressed 
todoInput.addEventListener("keyup", handleTodoInput);

// Function to create new todo item element
function newTodo(value) {
    // Create the html elements for the todo
    const todo = document.createElement('div');
    // Add draggable attribute to the div 
    todo.draggable = true;
    const todoText = document.createElement('p');
    const todoCheckBox = document.createElement('input');
    const todoCheckBoxLabel = document.createElement('label');
    const todoX = document.createElement('span');

    //Set the text for the element
    todoText.textContent = value;
    //Set type and name for checkbox element
    todoCheckBox.type = 'checkbox';
    todoCheckBox.name = 'checkbox';
    //Set the 'for' attribute on the label to match with the checkbox
    todoCheckBoxLabel.htmlFor = 'checkbox';

    //Add an event listener to the label that will toggle the checkbox and add/remove a class when clicked
    todoCheckBoxLabel.addEventListener('click', function(e) {
        if (todoCheckBox.checked) {
            todoCheckBox.checked = false;
            todoText.style.textDecoration = 'none';
            todoCheckBoxLabel.classList.remove('active');
        } else {
            todoCheckBox.checked = true;
            todoText.style.textDecoration = 'line-through';
            todoCheckBoxLabel.classList.add('active');
        }
    });

    todoX.textContent = "X";
    // Add an event listener to the X elemnt so it will remove the todo item when clicked
    todoX.addEventListener('click', function(e) {
        e.target.parentElement.remove();
    });

    // Add classes to the todo element
    todo.classList.add('todo');
    todoCheckBoxLabel.classList.add('circle');
    todoX.classList.add('x');

    // Append the the elements to the todo item
    todo.appendChild(todoCheckBox);
    todo.appendChild(todoCheckBoxLabel);
    todo.appendChild(todoText);
    todo.appendChild(todoX);

    // Get the container for todos
    const todosContainer = document.querySelector('.todos-container');

    // Append the todo to the container
    todosContainer.appendChild(todo);
}



// further functions needed:

// Filter if a task already exists and if so, prevent from adding to the todos
// To check if the input is not empty and so the user can not add an empty todo item
// To store the list after the page is refrehed 
// To show how many items are left to do on the list 
// Filter to show all todo items                     
// Filter to show active items                       
// Filter to show already completed items            
// Clear all the completed                           
// Drag and drop to reorder the list 

//Just thought about how would a user using a phone would press enter? 

//There might be more, but that's all I can think of for now.  