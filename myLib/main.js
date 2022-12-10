// const {getItemsOfCurrentPage,greetingSomeone,codeId} = require('./getItemsOfCurrentPage.js')

import {getItemsOfCurrentPage,greetingSomeone,codeId} from './getItemsOfCurrentPage.js'
import {BookMark} from './bookMarkManagement.js'

console.log(getItemsOfCurrentPage([5,10,30,55,2,100,8,9,87,10], 1,5))
console.log(greetingSomeone('Phutawan'));
console.log(codeId);

const myBookMark = new BookMark('1-234-5678', 200)
console.log(myBookMark);

