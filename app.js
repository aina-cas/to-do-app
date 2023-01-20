
// Toggle theme function 
function changeTheme () {
    document.body.classList.toggle('light');
}

const todoInput = document.querySelector("#todo-input");
// Array of objects to be used in later functions
const todos = [];

// Updated function to handle user input
function handleTodoInput(event) {
  // Has the user pressed the enter key?
  if (event.key === "Enter" || event.keyCode === 13) {
    // Is new input empty? 
    if (event.target.value !== null && event.target.value !== "") {
      // Is there new data to save? Check all existing todos
      const findExisting = todos.find(element => element.value === event.target.value);
      // Add new todo 
      if (findExisting === undefined) {
        todos.push({value: event.target.value, checked: false});
        newTodo(event.target.value); 
        event.target.value = ""; 
      } else {
        // Create a new element to display the pop up message
        const messageDiv = document.createElement('div');
        const message = document.createElement('p');
        // Set text to the p element 
        message.textContent = "This todo already exists!";
        // Add class to parent 
        messageDiv.classList.add("popup-message");
        // Append the message to the parent element
        messageDiv.appendChild(message);
        // Append the parent container to the body 
        document.body.appendChild(messageDiv);
        // Use setTimeout to remove the message after 3 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
         
      }
    }
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

var activeButton = document.getElementById("active-btn");
activeButton.addEventListener("click", toggleActive);                           // toggleActive function not created yet

var completedButton = document.getElementById("completed-btn");
completedButton.addEventListener("click", toggleCompleted);                     // toggleCompleted function not created yet

var allButton = document.getElementById("all-btn");
allButton.addEventListener("click", toggleAll);                                 // toggleAll function not created yet


// further functions needed:

// To store the list after the page is refrehed 
// To show how many items are left to do on the list 
// Filter to show all todo items                     
// Filter to show active items                       
// Filter to show already completed items            
// Clear all the completed                           
// Drag and drop to reorder the list 

//Just thought about how would a user using a phone would press enter? 

//There might be more, but that's all I can think of for now.  
