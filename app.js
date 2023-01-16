
//Toggle theme function 

function changeTheme () {
    document.body.classList.toggle('light');
}

const todoInput = document.querySelector("#todo-input");
const todos = [];


todoInput.addEventListener("keyup",  function (e) {
    if (e.key === "Enter" || e.keyCode === 13) {  //we check if the property or key is "Enter or keyCode is 13"
        todos.push({value: e.target.value, checked: false});
        //console.log(todos);
        newTodo(e.target.value);
        todoInput.value = ""; //Clears the input after new input has been pushed to the array 

    }
})

function newTodo(value) {
  const todo = document.createElement('div');
  const todoText = document.createElement('p');
  const todoCheckBox = document.createElement('input');
  const todoCheckBoxLabel = document.createElement('label');
  const todoX = document.createElement('span');

  todoText.textContent = value;
  todoCheckBox.type = 'checkbox';
  todoCheckBox.name = 'checkbox';
  todoCheckBoxLabel.htmlFor = 'checkbox';
  todoCheckBoxLabel.addEventListener('click', function (e) {
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
  todoX.addEventListener('click', function(e) {
    e.target.parentElement.remove();
  });

  todo.classList.add('todo');
  todoCheckBoxLabel.classList.add('circle');
  todoX.classList.add('x');

  todo.appendChild(todoCheckBox);
  todo.appendChild(todoCheckBoxLabel);
  todo.appendChild(todoText);
  todo.appendChild(todoX);


  const todosContainer = document.querySelector('.todos-container');
  todosContainer.appendChild(todo);




}
