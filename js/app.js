// Write Your Javascript Code here

const input = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // console.log('clicked');

    // Create div element
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const todoLi = document.createElement('li');
    todoLi.innerText = input.value;
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
});

todoList.addEventListener('click', function(e) {
    const target = e.target;

    if (target.classList[0] == 'trash') {
        const div = target.parentElement;
        div.remove();
    } else if (target.classList[0] == 'check') {
        const div = target.parentElement;
        div.classList.add('completed');
        target.remove();
    }
})

// Your task is to check
// whether an user is trying to add 
// an empty todo into the list
// Also add a search bar to search through the todo-list