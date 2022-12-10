import { todoManagement } from '../lib/todoManagement.js'
import { todoUserInterface } from '../UI/todoList.js'

// const todoManagement = require('../lib/todoManagement.js')
// const todoUserInterface = require('../UI/todoList.js')

const { showTodoItem, showNumberOfDone, showNumberOfNotDone,removeTodoItem } = todoUserInterface();
const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos
} = todoManagement();

const addTodoHandler = () => {

  const inputElements = document.querySelector('input');
  const input = inputElements.value;
  if(input.trim().length !== 0){
    let todoId = addTodo(input)
    showTodoItem(todoId, input)
    addButtonHandler(todoId);
    inputElements.value = '';
  }

  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())

}

const addButtonHandler = (todoId) => {
  const idParent = document.getElementById(todoId);
  const button = idParent.querySelectorAll('button');

  const notDoneButton = button[0];
  // console.log(notDoneButton);
  notDoneButton.addEventListener('click', notDoneButtonHandler)

  const removeButton = button[1]; 
  // console.log(removeButton);
  removeButton.addEventListener('click', removeButtonHandler)
}

const editButtonDoneStyle = (doneButton) => {
  doneButton.style = 'background-color: green;color: white';
  doneButton.textContent = 'Done';
}

const notDoneButtonHandler = (event) => {
  const doneButton = event.target;
  editButtonDoneStyle(doneButton);
  setItemToDone(doneButton.parentElement.getAttribute('id'))
  console.log(getTodos())

  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())

}

const removeButtonHandler = (event) => {
  const removeButton = event.target;
  const removeTodoId = removeButton.parentElement.getAttribute('id');
  removeTodo(Number(removeTodoId))
  console.log(getTodos())
  removeTodoItem(removeTodoId)

  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

export {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
}

// module.exports = {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler
// }
