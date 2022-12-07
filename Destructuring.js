// function isEmptyObject(obj){
//     return JSON.stringify(obj)==='{}'    
//     // return Object.keys(obj).length===0
// }
//     const o={}
//     console.log(Object.keys(o))
//     console.log(Object.values(o))
//     console.log(isEmptyObject(o))

// const myJSON = '{"name":"John", "age":30, "car":null}';
// const myObj = JSON.parse(myJSON); // JSON -> js

// console.log(JSON.parse(myJSON))

// object 
// const student={
//     id: 645000123,
//     profile: {
//     fullname:{
//         firstname:'Suda',
//         lastname: 'DeeJai'
//     }
//     }
//     ,
//     getFullName(){
//         return `${this.fullname.firstname} ${this.fullname.lastname}` 
//     }
// }
// const {id,profile:{fullname:{firstname,lastname}}}=student
// console.log(id);
// console.log(firstname)
// console.log(lastname)

// const {id , ...studentDetail} = student
// console.log(id)
// console.log(studentDetail)

// //array
// const students=[{
//     id:645000123, 
//     profile:{
//         fullname:{
//          firstname:'Suda', 
//          lastname:'DeeJai'
//         }
//     },
//     getFullName(){
//         return `${this.profile.fullname.firstname},  ${this.profile.fullname.lastname}`
//     }
// },
// {
//     id:555, 
//     profile:{
//         fullname:{
//          firstname:'Somchai', 
//          lastname:'SeeJai'
//         }
//     },
//     getFullName(){
//         return `${this.profile.fullname.firstname},  ${this.profile.fullname.lastname}`
//     }
// }]
// console.log(students.id);
// students.forEach(x=> console.log(x.id))

// const [,{profile:{fullname:{firstname, lastname}}}]=students
// console.log(firstname)
// console.log(lastname)



// console.log(students[0].getFullName())

// students.forEach(x => {
//     console.log(x.getFullName()); 
    
// });





// const address = {
//     houseNo: 126,
//     province: 'Bangkok'
// }

// //object ไม่มีลำดับ
// //rename
// const {province: myprovince} = address
// console.log(myprovince)

// const {province,houseNo} = address
// console.log(province)
// console.log(houseNo)

// //spread operator (...)
// //merge two object properties
// const studentProfile = {...student, ...address}
// console.log(studentProfile)

// //replace id
// const newStudent = {...student, id:1}
// console.log(newStudent.getFullName())

// // rest operator (...)