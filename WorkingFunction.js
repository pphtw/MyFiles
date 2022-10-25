// const addition = function (n1,n2){
//     return n1 + n2
// }

// //arrow functions
// const afAddition=(n1,n2)=> n1+n2
// console.log(afAddition(10,20))

// const addition2=(n1,n2)=>{
//     let sum = n1+n2
//     return sum
// }
// console.log(addition2(5,15))

// // const getMsg=(msg)=>msg
// const getMsg=msg=>msg //return msg
// console.log(getMsg('Hello'))



// 11/10/2022

// let value = 24/3+5
// console.log(value)

// //annonymous function
// const doSomethig = function (x){
//     return x.charAt(0)
// }
// console.log(doSomethig('Phutawan'))

// //arrow function
// const doIt = x => x.charAt(0)
// console.log(doIt('hello'))


// //nested function
// function average(nums){
    
//     function sum(){
//         let total = 0
//         for(const num of nums){
//             total = total + num
//         }
//         return total
//     }
    
//     return sum()/nums.length
// }

// console.log(average([1,2,3,4,5]))

// // The following let variables are defined in the global scope
// let mid = 20
// let final = 5
// let fname = 'Ada'
// // sum function is defined in the global scope
// function sum() {
// return mid + final
// }

// console.log(`#1 sum: ${sum()}`) // Returns 25
// mid = 10
// console.log(`#2 sum: ${sum()}`) // Returns 15

// function getScore() {
// let mid = 10
// let final = 30

// //yourScore is nested function
// function yourScore() {
// return fname + ' scored ' + (mid + final)
// }
// return yourScore //closure 
// }
// console.log(getScore()()) // Returns "Ada scored 40"

// const scoreFn = getScore()
// console.log(scoreFn())

//closure

// function outer(x){
//     let n=1
//     function inner1(y){
//         n = n+5
//         return x+n+y
//     }
//     function inner2(z){
//         return x+n+z
//     }
//     return {inner1, inner2}//{inner1:inner1, inner2: inner2} -> key กับ value ตรงกัน

// }

// //object destructuring
// const {inner1, inner2} = outer(10) 
// console.log(inner1(20))
// console.log(inner2(30))

// // const o = outer(10) // -> o เก็บ object

// // console.log(o.inner2(30)) //41
// // console.log(o.inner1(20)) //36
// // console.log(o.inner2(30)) //46

// //arguments
// function doSomething (w, x, y, z){
//     console.log(arguments[0]) //w
//     console.log(arguments[1]) //x
//     console.log(arguments[2]) //y
//     console.log(arguments[3]) //z
//     // return w+x+y+z
//     let sum = 0

//     for(const a of arguments){
//         sum += a
//     }

//     return sum
// }

// console.log(doSomething(10,20,30,40))

//rest Parameters
function sum(num1, num2, num3){
    return num1 + num2 + num3

}

let nums = [5,20]
console.log(sum(...nums))