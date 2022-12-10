// const Todo = require('./todo.js')
import { Todo } from "./todo.js";

function todoManagement() {
  let todos = []
  function addTodo(desc) {
    const newTodo = new Todo(desc)
    todos.push(newTodo)
    return newTodo.id
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    return todos.filter(e => e.done === true).length
  }
  function getNumberOfNotDone() {
    return todos.filter(e => e.done === false).length
  }
  function setItemToDone(doneId){
    return todos.find(({id}) => id === Number(doneId)).setDone()
  }
  

  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    setItemToDone
  }
}

// module.exports = todoManagement
export {todoManagement}

// const test = todoManagement();
// console.log(test.addTodo('Watch Movie'))

// console.log(test.getNumberOfDone())
// console.log(test.getNumberOfNotDone())
