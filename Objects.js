// Object in js is prototype based not class based
//1. object literals
let address = {houseNo: 126, province:'Bangkok'}
//let address = new Object()
console.log(address)
console.log(Object.prototype.isPrototypeOf(address)); // prototype metafor = template of class

//2. new operator
// class Square{
//     constructor(s){
//         this.side = s 
//     }
//     area(){
//         return this.side*this.side
//     }
//     isEqual (anotherSquare){
//         return this.side===anotherSquare.side
//     }

// }
// //const ของ Obejct สามารถเปลี่ยน  value, element ภายในได้ แต่เปลี่ยน ref address ไม่ได้
// const square1 = new Square(2)
// square1.side = 20
// let square2 = new Square(5)
// square2.side = 20

// //Check -> Equality
// //1. == / === cannot use in object
// //2. manual equality
// console.log(square1.isEqual(square2))

// //3. Shallow Equality



// // square1 = square2 //ไม่สามารภ assign ค่าได้
// console.log(square1.area());
// console.log(square2.area());

// function perimeter (){
//     return this.side*4
// }

// square2.squarePerimeter=perimeter
// console.log(`square perimeter = ${square2.squarePerimeter()}`)

// // square1.squarePerimeter=perimeter //not reccommend
// console.log(`square perimeter = ${square1.squarePerimeter()}`)


// let profile = {
//     id: 123,
//     interests: ['music', 'skiing']
// }

// // profile.interests[0] = 'reading'

// console.log(profile["interests"][0]);


// let book = { isbn: 123456789,
//     title: 'JavaScript',
//     author: {
//         firstname: 'Phutawan',
//         lastname: 'Palakavong'
//     },
//     getBook: function(){
//         return `book title:${this.title}, 
//         author: ${this.author.firstname} ${this.author.lastname}`
//     }

// }
// book.author.firstname = 'Suda'
// book.author.lastname = 'Deejai'
// console.log(book.author["firstname"])
// console.log(book.author["lastname"]);
// console.log(book.getBook());

// function multiply(a, b = 1) {
//     return a * b;
//   }
  
//   console.log(multiply(5, 2));
//   console.log(multiply(5, null)); // null = 0
//   console.log(multiply(5, undefined));// ใช้ค่า default param

// object literal
// let square1 = {
//     side:2,
//     area(){
//         return this.side*this.side
//     }
// }

// let square2 = {
//     side:5,
//     area(){
//         return this.side*this.side
//     }
// }
// let book = { isbn: 123456789,
//     title: 'JavaScript',
//     author: {
//         firstname: 'Phutawan',
//         lastname: 'Palakavong'
//     }}

// const bookKeys=Object.keys(book)
// console.log(bookKeys)
// const bookValues = Object.values(book)
// console.log(bookValues)

// class Subject {
//     constructor(title = 'untitle'){
//         this.title = title
//     }
//     getTitle(){
//         return this.title
//     }
// }

// let subject = new Subject('Client Side I')
// //inherit parent property (title)
// let lectureSubject = Object.create(subject)
// lectureSubject.lectureHours=2

// console.log(lectureSubject)
// console.log(lectureSubject.title)
// console.log(lectureSubject.getTitle())

// //prototype chaining
// console.log(Object.prototype.isPrototypeOf(lectureSubject))
// console.log(Object.prototype.isPrototypeOf(lectureSubject))