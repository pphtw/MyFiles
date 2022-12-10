
const htmlElement = document.children[0];
const bodyElement = htmlElement.children[1];

console.log(htmlElement);
console.log(bodyElement);

const div1Element = document.createElement('div');
div1Element.style = 'border: solid 3px purple; background-color: wheat; margin: 1em; padding: 1em;'
bodyElement.appendChild(div1Element);


const div2Element = document.createElement('div');
div2Element.style = 'border: solid 3px green; background-color: wheat; margin: 1em; padding: 1em;'
bodyElement.appendChild(div2Element);

const h3Element = document.createElement('h3');
h3Element.innerText = 'Click the button!';
h3Element.style = 'color: Blue;'

div1Element.appendChild(h3Element)

const ulElement = document.createElement('ul');
div1Element.appendChild(ulElement);

const fruits = ["apple", "banana", "tomato"];
const vegetables = ['cucamber', 'onion', 'chilli'];

function showItem (items){
    ulElement.innerHTML='';
    items.forEach((e) => {
        const liElement = document.createElement('li');
        liElement.innerText = e;
        ulElement.appendChild(liElement)
    })
}

function vegetableBtnHandler(){
    h3Element.innerText = 'Vegetables List';
    showItem(vegetables)
}

function fruitBtnHandler(){
    h3Element.innerText = 'Fruits List';
    showItem(fruits)
}

function clearHandler(){
    const liElement = document.querySelectorAll('li');
    liElement.forEach(e => ulElement.removeChild(e))
    h3Element.innerText = 'Click the button!';
    
}

const fruitBtn = document.createElement('button');
fruitBtn.innerText='Show fruits';
fruitBtn.style = 'margin: 1em; padding: 1em; border: none; border-radius: 1em; background-color: yellow; width: 10em;'
div2Element.appendChild(fruitBtn)

const vegetableBtn = document.createElement('button');
vegetableBtn.innerText='Show vegetable';
vegetableBtn.style = 'margin: 1em; padding: 1em; border: none; border-radius: 1em; background-color: lightgreen; width: 10em;'
div2Element.appendChild(vegetableBtn)

const clearBtn = document.createElement('button');
clearBtn.innerText='clear';
clearBtn.style = 'margin: 1em; padding: 1em; border: none; border-radius: 1em; background-color: salmon; width: 10em;'
div2Element.appendChild(clearBtn)

vegetableBtn.addEventListener('click', vegetableBtnHandler);
fruitBtn.addEventListener('click', fruitBtnHandler);
clearBtn.addEventListener('click', clearHandler);
