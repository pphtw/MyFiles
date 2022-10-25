const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//filter คือจะวนลูปในอาเรย์ที่รับเข้ามา และจะทำการเก็บค่าเฉพาะค่าที่ตรงตามเงื่อนไขใน filter

//Arrow Function
console.log('This is Arrow function result')


const result1 = words.filter(word => word.length > 6); //เงื่อนไขต้องถูกอธิบายในรูปแบบ function


console.log(result1);
console.log('----------------------------------------------')

//Callback Function
console.log('This is Callback function result')


function lengthThatMoreThanSix (x){
    return x.includes('nt') //ตัวที่มี nt
}
let result2 = words.filter(lengthThatMoreThanSix)


console.log(result2)
console.log('----------------------------------------------')

//Inline callback function
console.log('This is Inline callback function result')


const result3 = words.filter(item => {
    if (item.includes('it')) return item
})
console.log(result3);
  

console.log('----------------------------------------------')


