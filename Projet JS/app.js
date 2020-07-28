let todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

const ItemList = Array();
const toUpdate = Array();

//LOCALSTORAGE



//const editButton = document.createElement("button");

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



function addTodo(event){
    event.preventDefault();
    
    if(typeof toUpdate[0] !== 'undefined' && toUpdate != null && toUpdate.length >0){
        if(todoInput.value == ""){
            toUpdate[0].parentElement.remove();
        }else {
            toUpdate[0].textContent = todoInput.value;
        }
        toUpdate.splice(0);
        todoInput.value="";
    }
    else {
        if(todoInput.value.length >= 2){
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo")

            const newTodo = document.createElement("li");
            newTodo.innerText = todoInput.value;
            newTodo.classList.add("todo-item");
            newTodo.addEventListener('click', modifier);
            todoDiv.appendChild(newTodo);

            const checkedButton = document.createElement("button");
            checkedButton.innerHTML = '<i class="fas fa-check"></i>';
            checkedButton.classList.add("checked-btn");
            todoDiv.appendChild(checkedButton);

            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
            deleteButton.classList.add("delete-btn");
            todoDiv.appendChild(deleteButton);

            todoList.appendChild(todoDiv);
            ItemList.push(newTodo);
            todoInput.value="";

        }
    }
    
}

function deleteCheck(e) {
    const item = e.target;

    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "checked-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("checked")
    }

}


function modifier(e) {
    const item = e.target;
    
    todoInput.value = item.textContent;

    toUpdate.push(item);


}


let date1 = new Date();

let dateLocale = date1.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'});

document.getElementById('p1').innerHTML = dateLocale;