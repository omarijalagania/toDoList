const todoForm = document.querySelector('.todo-form');
const todoText = document.querySelector('.todo-text');
const todoList = document.querySelector('.todo-list');
const delBtn = document.querySelector('.del-icon');
let newArr = [];


//submit button
todoForm.addEventListener('submit', el => {
    el.preventDefault();
    let todoElements = {
        list: todoText.value
    };
    if (todoText.value !== '') {
        newArr.push(todoElements);
        displayList();
        clearTodoText();
    }
});

//display markup on page
function displayList() {
    let markup = '';

    newArr.forEach((el, index) => {
        markup = `
        <li class="todo-job item-${index}">
            <ion-icon onclick="removeElement(${index})" class="del-icon item2-${index}" name="backspace-outline"></ion-icon>
            <div class="todo-content"> ${todoText.value} </div>
        </li>
        
    `;

    });

    todoList.insertAdjacentHTML('afterbegin', markup);
}



//remove Element From list
function removeElement(index) {
    todoList.querySelector(`.item-${index}`).remove();
    newArr.splice(index, 1);
}

//clear Text Area
function clearTodoText() {
    todoText.value = '';
}


