const todoList = document.getElementById('todo-list');
const emptyList = document.getElementById('empty-list');

//Empty data list
const emptyListData = () => {
    if (toDoList.children) {
        emptyList.style.display = 'none';
    }
}

//Set to do list
const myToDo = () => {
    const todoInput = document.getElementById('todo-input');
    const todoInpurValue = todoInput.value;
    if (!todoInpurValue) {
        alert('Please enter a to-do item before adding it to the list.');
        return;
    };
    emptyListData();
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between');
    div.innerHTML = `
        <li><label for="checkbox"><input id='checkbox' class="mr-4" type="checkbox" name="">${todoInpurValue}</label></li>
        <button><i class="fa-regular fa-rectangle-xmark text-2xl text-red-600 hover:text-red-800"></i></button>
    `
    todoList.appendChild(div);
    todoInput.value = '';
    saveData();
}

//Add List by add button
document.getElementById('add-btn').addEventListener('click', () => {
    myToDo();
});

//Add List by Enter key
document.getElementById('todo-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        myToDo();
    }
})

//Remove Data from list
document.getElementById('todo-list').addEventListener('click', (e) => {
    if (e.target.parentNode.tagName === "BUTTON") {
        e.target.parentNode.parentNode.remove();
        if (toDoList.children.length === 0) {
            emptyList.style.display = 'block';
        }
        saveData();
    }
});

//Save and Show Local Storage Data
const toDoList = document.getElementById('todo-list');
const saveData = () => {
    localStorage.setItem('data', toDoList.innerHTML);
}
const showDataList = () => {
    toDoList.innerHTML = localStorage.getItem('data',)
}
showDataList();