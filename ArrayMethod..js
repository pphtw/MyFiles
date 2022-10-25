// const students=[{id:1, name:'Somchai'}, 
//                 {id:2, name:'Somsri'}, 
//                 {id:3, name:'Chujai'}]

// //studentIds=[{id:1}, {id:2}, {id:3}]
// let studentIds =[]
// students.forEach(student=> studentIds.push({id:student.id}))
// console.log(studentIds)


// //map
// const studentIds2 = students.map(student => student.id)
// console.log(studentIds2);

const arr = [11,12,13,14,15]
view = arr.map((e,i) => e>12? i:false)

console.log(view)

const nums = [100000, 15, 20, 2000, 1]
console.log(nums.sort())
//[1, 100000, 15, 20, 2000]

console.log(nums.sort((a,b) => b-a))
//[10000, 2000, 20, 15, 1]