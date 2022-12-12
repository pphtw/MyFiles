//เรียก rootnote ของเอกสาร html
// root note, nodetype = DOCUMENT_NODE(value = 9)
const rootNode = window.document
console.log(rootNode)

//เรียก root element (html)
const rootElement = document.documentElement
console.log(rootElement);

//all node types of html's children nodes
const htmlChildNodes = rootElement.childNodes
console.log(htmlChildNodes)
console.log(htmlChildNodes.length) //array-like
console.log(htmlChildNodes[htmlChildNodes.length-1])//array-like

//only element types of html's children nodes
const htmlElementNodes = rootElement.children
console.log(htmlElementNodes)
console.log(htmlElementNodes.length) //array-like
console.log(htmlElementNodes[htmlElementNodes.length-1]) //array-like

//ระวังตอนใช้ DOM แค่มี white space จะนับว่าเป็น text node

//1. create a new paragraph element
const newPElementNode=document.createElement("p")

//2. create a new attribute
// const newAttrNode=document.createAttribute("class")
// newAttrNode.value="course"
newPElementNode.setAttribute("class", "course") //reduce step 2+4

//3. create a text value
// const newTextNode = document.createTextNode("INT201")
newPElementNode.textContent="<span style ='color:red'>INT201</span>" //reduce step 3+5
newPElementNode.innerHTML="<span style ='color:red'>INT201</span>" //reduce step 3+5

//4.add attribute node to its owner tag
// newPElementNode.setAttributeNode(newAttrNode)

//5. add text node to parent node
// newPElementNode.appendChild(newTextNode)

//6. add a new paragraph to a tree document
const targetDiv = document.getElementById("myApp") //find a <div id = id'myApp'> node in the document
targetDiv.appendChild(newPElementNode)

//get node name, node value, and node type
console.log(rootNode.nodeType);
console.log(rootNode.nodeName);
console.log(rootNode.nodeValue);


console.log(document.head);
console.log(document.body);
console.log(document.title);

// console.log(newAttrNode.ownerElement); //tag owner

console.log(targetDiv.previousElementSibling);
console.log(targetDiv.nextElementSibling);
console.log(targetDiv.parentElement);
console.log(targetDiv.children);

const sectionDiv = document.getElementById('sections')
const sectionsbySelectorAll = document.querySelectorAll('.section') 
const sectionsByClassName = document.getElementsByClassName('section')
console.log(sectionDiv);
console.log(sectionsbySelectorAll);
console.log(sectionsByClassName);