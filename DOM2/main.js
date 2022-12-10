// //selecting <ul> node
// const bodyChildrenNode = document.body.children //array-like object
// const divChildNode = bodyChildrenNode[1]
// const ul = divChildNode.firstElementChild //divChildNode[0]
// //firstChild -> will select the textContent too

// //htmlCollection -> คืนค่าเฉพาะ elementNodeType
// //NodeList -> จะคือค่าทุก type รวมถึง textNode และ enter white space

// // const ul = document.getElementById("courseList").firstElementChild;

// //create <li> node
// const liElementNode = document.createElement("li") //<li></li>
// liElementNode.setAttribute("class", "dev") //<li class="dev"></li>
// liElementNode.textContent="INT101- Java Programming I"
// ul.appendChild(liElementNode)

// const liElementNode2 = document.createElement("li")
// liElementNode2.setAttribute("class", "dev")
// liElementNode2.textContent="INT202-Server Side I"
// ul.appendChild(liElementNode2)

// // liElementNode.textContent="INT202-Server Side I"
// // ul.appendChild(liElementNode)

// //-----------------------------------------------------------

// //1. query by attribute id
// const divById = document.getElementById('summary')
// console.log(divById)

// const ulById = document.getElementById('courseList')
// console.log(ulById)

// //2.query by tagname (HTMLCollection)
// const ulByTagName = document.getElementsByTagName('ul')
// console.log(ulByTagName)
// console.log(ulByTagName.length)
// console.log(ulByTagName[0])

// //3.query by class name (HTMLCollection)
// const nodeByClassname = document.getElementsByClassName('database')
// console.log(nodeByClassname);

// //HTMLCollection ใช้ forEach ไม่ได้ แต่ NodeList ใช้ได้เลยโดยไม่ต้องใช้ array.from()
// Array.from(nodeByClassname).forEach(e => {
//     console.log(e);
// })

// //4.query by name attribute
// const nodeByName = document.getElementsByName('abc')
// console.log(nodeByName);

// //5.query by querySelector (ใช้เหมือน css selector ใช้ .) return first descendant
// const querySelector = document.querySelector('.database')
// console.log(querySelector)
// const queryById = document.querySelector('#summary')
// console.log(queryById);

// //6. query by querySelectorAll
// const queryAllByClass = document.querySelectorAll('.database')
// console.log(queryAllByClass)

// const queryAllByTagClass = document.querySelectorAll('li[class=devops]') //case sensitive // li.devops
// console.log(queryAllByTagClass);

//----------------------------Manipulate Nodes--------------------------------

// //insertBefore()
// //1. create p node
// const pNewNode=document.createElement('p')
// pNewNode.setAttribute('class', 'devops')
// pNewNode.textContent='2'

// //2. select parent node
// const divParentNode = document.getElementById('summary')

// //3. select reference node
// const divChildrenNode = divParentNode.children
// const referNode = divChildrenNode[1]
// console.log(referNode);

// //4. insert before 3.
// divParentNode.insertBefore(pNewNode, referNode)

// //replace()----------------------------------

// //1.create a new <li> node
// const liNewNode = document.createElement('li')
// liNewNode.textContent="Ajarn Saichon Jaiyen"

// //2.select a parent node
// const ulParent = document.querySelector(".lecturers")

// //3. select an old node
// const liOldNode = ulParent.children[1]

// //4. replace 1 into 3
// ulParent.replaceChild(liNewNode, liOldNode)


// //remove node ------------------------------------
// //1. select a remove node
// const deletedNode = ulParent.lastElementChild

// ulParent.removeChild(deletedNode)

//-------------------------------System Dialog------------------------------------
//1. who are you?, user enters her/his name (prompt)
//2. confirm your name (confirm)
//3. greeting message (alert)

// const yourName = prompt('Who are you?', 'please, type your name')
// if(yourName === '' || yourName === 'please, type your name') {
//     alert('Hello, guest')
// }
// else{
//     const isConfirmName = confirm(`Are you ${yourName}?`)
//     isConfirmName? alert(`hello, ${yourName}`):alert('you are guest')
// }