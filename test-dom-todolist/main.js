const todoUserInterface = require('./UI/todoList')
const todoManagement = require('./lib/todoManagement')
const {addTodoHandler, notDoneButtonHandler, removeButtonHandler} = require ('./eventHandler/eventController.js');

// import {addTodoHandler, notDoneButtonHandler, removeButtonHandler} from './eventHandler/eventController.js'
// import {todoUserInterface} from './UI/todoList.js'
// import {todoManagement} from './lib/todoManagement.js'

const {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone
  } = todoManagement();

const { showTodoItem, showNumberOfDone, showNumberOfNotDone } = todoUserInterface();

const parentElement = document.getElementById('listTodo');

const addBtn = document.querySelector('button');
addBtn.addEventListener('click', addTodoHandler);

const inputField = document.querySelector('input');
inputField.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
      addTodoHandler()
    }
});

// const notDoneButton = document.getElementById('button');
// notDoneButton.addEventListener('click', notDoneHandler);
