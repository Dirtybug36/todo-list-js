const buttonAdd = document.querySelector(".button-add");

//TODO Lists
// When loading the page, load from localStorage.
const todoLists = JSON.parse(localStorage.getItem("lists")) || [
  { name: "wash car", dueDate: "06/22/2022" },
  { name: "do laundry", dueDate: "05/09/2022" },
  { name: "read javascript", dueDate: "03/05/2022" },
];

//to display input lists in the beginning
renderTodoList();

//to add new lists
function addTodo() {
  const inputList = document.querySelector(".input-lists");
  const inputDate = document.querySelector(".input-date");
  const lists = inputList.value;
  const dueDate = inputDate.value;
  todoLists.push({ name: lists, dueDate: dueDate });

  renderTodoList();
  // Whenever we update the todo list, save in localStorage.
  saveToStorage();
}
//onclick function to add button
buttonAdd.addEventListener("click", addTodo);
//to render lists
function renderTodoList() {
  //to render lists in string
  let renderHtml = "";
  todoLists.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    let html = `<p>${name} ${dueDate} <button onclick='todoLists.splice(${index},1);renderTodoList();saveToStorage();'>Delete</button> </p>`;
    renderHtml += html;
  });

  const lists = document.querySelector(".render-lists");
  lists.innerHTML = renderHtml;
}
//to save in local storage
function saveToStorage() {
  localStorage.setItem("lists", JSON.stringify(todoLists));
}
