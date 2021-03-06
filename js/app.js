// Selectors

const input = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Add Task List
function addTask(e) {
    e.preventDefault();
    const inputTask = input.value;

    if (inputTask == "") {
        alert('Please add a task');
    } else {
        // Create div element
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const todoLi = document.createElement('li');
        todoLi.innerText = inputTask;

        todoLi.classList.add('.todo-item');

        const btnCheck = document.createElement('button');
        btnCheck.innerHTML = `<i class="fas fa-check"></i>`;
        btnCheck.classList.add('check');

        const btnTrash = document.createElement('button');
        btnTrash.innerHTML = `<i class="fas fa-trash"></i>`;
        btnTrash.classList.add('trash');

        todoDiv.append(todoLi, btnCheck, btnTrash);

        // Appending div into todo list
        todoList.appendChild(todoDiv);

        //Reset the input field

        input.value = "";
    }

};

//Remove or Update
function removeUpdate(e) {
    const target = e.target;

    if (target.classList[0] == 'trash') {
        const div = target.parentElement;
        div.classList.add('drop-effect');
        div.addEventListener('transitionend', function() {
            div.remove();
        });

    } else if (target.classList[0] == 'check') {
        const div = target.parentElement;
        div.classList.add('completed');
        target.remove();
    }
}

//Event Listeners

todoBtn.addEventListener('click', addTask(e));
todoList.addEventListener('click', removeUpdate(e));

// Your task is to check
// whether an user is trying to add 
// an empty todo into the list
// Also add a search bar to search through the todo-list