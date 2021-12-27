const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDoArray = []; 
const TODO_KEY = "todo-list";

function saveToDo(newToDo) {
    toDoArray.push(newToDo);
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoArray));
}

function removeToDo(event) {
    const toDo = event.target.parentElement;
    toDo.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button")
    button.innerText = "💔";
    button.addEventListener("click", removeToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    console.log(newToDo);
    paintToDo(newToDo);
    saveToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const storedToDo = localStorage.getItem(TODO_KEY);

if(storedToDo !== null) {
    toDoArray = JSON.parse(storedToDo);
    toDoArray.forEach(paintToDo);
}
