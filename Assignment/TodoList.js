class Todo {
    static runningId =1 
    constructor(description){
        this.id = Todo.runningId++
        this.description = description
    }

    getToDo (){
        return {id : this.id, description : this.description}
    }

    setDescription (newDescription){
        return this.description = newDescription
    }
}
function toDolistManagement (){
    let toDos = []

    function addTodo (newDesc){
        toDos.push(newDesc)
        return `your have ${toDos.length} thing to do.`
    }

    function removeTodo (removeId){
        toDos = toDos.filter((element) => removeId !== element.id)
        return `ID : ${removeId} description removed!`
    }

    function findTodo (searchId){
        let found = toDos.find((element) => searchId === element.id)
        return found
    }
    function getTodos (){
        return toDos
    }

    return {addTodo, removeTodo, findTodo, getTodos}
}

let todo1 = new Todo("Watch Movie")
let todo2 = new Todo("Do js")
let todo3 = new Todo("Do Homework")

console.log(todo1.getToDo())
console.log(todo2.getToDo())

console.log(todo2.setDescription("Do javascript"))
console.log(todo2.getToDo())

//management
let test = toDolistManagement()

console.log(test.addTodo(todo1))
console.log(test.addTodo(todo2))
console.log(test.addTodo(todo3))
console.log(test.getTodos())

console.log(test.removeTodo(1))
console.log(test.getTodos())

console.log(test.findTodo(2))

console.log(test.getTodos())
// console.log(test.findTodo(2))

//destructuring object
const {addTodo, removeTodo, findTodo, getTodos} = toDolistManagement()

console.log(addTodo(todo1))
console.log(addTodo(todo2))
console.log(addTodo(todo3))

console.log(getTodos())

console.log(removeTodo(3))
console.log(getTodos())

//common module
module.export