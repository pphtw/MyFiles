function todoUserInterface() {
  function showTodoItem(newId, newDescription) {

    const listTodoDiv = document.getElementById("listTodo")

    const todoItem = document.createElement("div")
    todoItem.setAttribute("id", newId)

    const description = document.createElement("p")
    description.textContent=newDescription
    // description.innerText=newDescription

    const notDoneButton = document.createElement("button")
    notDoneButton.textContent = 'Not Done'

    const removeButton = document.createElement("button")
    removeButton.textContent = 'remove'

    //appendChild
    todoItem.appendChild(description) 
    todoItem.appendChild(notDoneButton)
    todoItem.appendChild(removeButton)

    listTodoDiv.appendChild(todoItem)
  
  }

  function showNumberOfDone(numberOfDone) {
    const pElement = document.getElementById('done');
    pElement.textContent=`Number of Done:${numberOfDone}`
  }

  function showNumberOfNotDone(numberOfNotDone) {
    const pElement = document.getElementById('notDone');
    pElement.textContent=`Number of Not Done:${numberOfNotDone}`
  }

  function removeTodoItem(removeId){
    const parentTodo = document.getElementById("listTodo")

    const deleteTodo = document.getElementById(Number(removeId))
    parentTodo.removeChild(deleteTodo)
  }

  return { showTodoItem, showNumberOfDone, showNumberOfNotDone,removeTodoItem }
}


// module.exports = todoUserInterface
export{todoUserInterface}
