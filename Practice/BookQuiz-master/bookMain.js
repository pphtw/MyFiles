const books = require('./bookList').bookList;

const findByTitle = (arr, name) => {
    let books = []
    for (const book of arr) {
        if (book.title.includes(name)){
            books.push(book)
        }
    }
    return books
}

const findByAuthor = (arr, name) => {
    let books = []
    for (const book of arr) {
        if (book.authors.includes(name)){
            books.push(book)
        }
    }
    return books
}
const findByCategory = (arr, name) => {
    let books = []
    for (const book of arr) {
        if (book.categories.includes(name)){
            books.push(book)
        }
    }
    return books
}
const findByDate = (arr, date) => {
    let books = []
    for (const book of arr) {
        if (book.publishedDate !== undefined){
            if (new Date(book.publishedDate.$date).getTime() === new Date(date).getTime()){
            books.push(book)
            }
        }
    }
    return books
}

// console.log(findByTitle(books, "Flex"))
// console.log(findByAuthor(books, "Dan Orlando"))
// console.log(findByCategory(books, "Open Source"))
console.log(findByDate(books, '2009-04-01'))

// console.log(books[0].publishedDate.$date)
// console.log('2020/03/01')
