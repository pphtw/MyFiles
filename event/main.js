import {students} from "./data/students.js"
import { lecturers } from "./data/lecturers.js"

console.log(students);
console.log(lecturers);

const divButtonPanel = document.getElementById("buttonPanel")

const studentButton = divButtonPanel.children[0]
console.log(studentButton)

const lecturerButton = divButtonPanel.children[1]
console.log(lecturerButton)

//add event handler function by using anonymous function
// studentButton.addEventListener('click', ()=>{
//     alert('Hello, student button')
// }, false)
// function studentButtonHandler (){
//     alert ("2nd function handler for student button")
// }
// studentButton.addEventListener('click', studentButtonHandler, false)
// studentButton.removeEventListener('click', studentButtonHandler, false)

//function expression (arrow function)
// const divButtonHandler=()=>{
//     alert('Hi, Div Button Panel')
// }
// divButtonPanel.addEventListener('mouseup', divButtonHandler)



// function studentButtonHandler(){
    
//     const ulParentElement = document.querySelector('ul')
//     ulParentElement.textContent = ''

//     for(let i = 0; i < students.length; i++){
//         const liElement = document.createElement('li')
//         liElement.textContent = `ID: ${students[i].id}, NAME: ${students[i].name}`
//         ulParentElement.appendChild(liElement)
//     }
//     const liNewElement = document.createElement('li')
    

// }

// function lecturerButtonHandler(){
    
//     const ulParentElement = document.querySelector('ul')
//     ulParentElement.textContent = ''
    
//     for(let i = 0; i < lecturers.length; i++){
//         const liElement = document.createElement('li')
//         liElement.textContent = `ID: ${lecturers[i].id}, NAME: ${lecturers[i].name}`
//         ulParentElement.appendChild(liElement)
//     }
//     const liNewElement = document.createElement('li')

// }

divButtonPanel.addEventListener('click', (event=> {
    console.log(event.target) //<button id="1">Students</button>
    console.log(event.target.id) //1
    console.log(event.type) //click
    console.log(event.eventPhase) //3
    console.log(event.currentTarget) //div id="buttonPanel"
}))

function studentButtonHandler(event){
    console.log(event.target)
    console.log(event.target.id)
    console.log(event.type)
    console.log(event.eventPhase)
    console.log(event.currentTarget)

    // dataButtonHandler(students)
}
// function lecturerButtonHandler(e){
//     dataButtonHandler(lecturers)
// }

// function dataButtonHandler(items){
//     const ulParentElement = document.querySelector('ul')
//     ulParentElement.textContent = ''
    
//     for(let i = 0; i < items.length; i++){
//         const liElement = document.createElement('li')
//         liElement.textContent = `ID: ${items[i].id}, NAME: ${items[i].name}`
//         ulParentElement.appendChild(liElement)
//     }
//     const liNewElement = document.createElement('li')
// }

// function dataButtonHandler(event){
//     const ulParentElement=document.querySelector('ul')
//     ulParentElement.textContent=''//<ul></ul>
//     const items=Number(event.target.id)===1?students:lecturers
//     items.forEach(item => { //each element in array
//         for (const key in item) { //each property of object
//             const liElement=document.createElement('li')
//             liElement.textContent=`${key} ${item[key]}`
//              ulParentElement.appendChild(liElement)                          
//         }
//     });
// }

studentButton.addEventListener('click', studentButtonHandler)
// lecturerButton.addEventListener('click', lecturerButtonHandler)

// -------------------------------------------

// const msg= document.querySelector('#message') 
// const display = document.querySelector('p') 
// // msg.addEventListener('input', function () {
// //  display.textContent =msg.value
// // })
// msg.addEventListener('keypress', (event)=>{
//     //event.keyCode, event.which
//     if(event.key==='Enter')
//     display.textContent=msg.value
// })