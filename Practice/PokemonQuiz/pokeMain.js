const poke = require('./pokeList.js').pokeList;
//เริ่มเขียนต่อจากตรงนี้
// **ข้อที่ 1 ให้สร้าง Fuction ที่ต้อง Retrun ค่า Array ที่มีเฉพาะ Pokemon Type เป็น fire และต้องเรียง id จากน้อยไปมากด้วย**
// const findPokeByType = (poke) => {
    //arrow function
//     let arr = []
//     for (let item of poke) {
//         if(item !== null && item.type === 'fire'){
//             arr.push(item)
//         }
//     }
//     arr.sort(function(a,b) {
//         return parseInt(a.id) - parseInt(b.id)
//     })
// }

// console.log(findPokeByType(poke))

// **ข้อที่ 2 ให้สร้าง Fuction ที่ต้อง Retrun ค่า Array ของ Pokemon ที่มี atk มากสุดของแต่ละ type ซึ่งประกอบด้วย grass, fire, electric และเรียงตาม atk จากมากไปน้อย**
const findPokeMostAtk = (poke) => {
    let arr = []

    let arr_fire = []
    let arr_grass = []
    let arr_elec = []
    for (let item of poke) {
             if (item !== null && item.type === 'fire') { arr_fire.push(item) }
        else if (item !== null && item.type === 'grass') { arr_grass.push(item) }
        else if (item !== null && item.type === 'electric') { arr_elec.push(item) }
    }
    arr_fire.sort((a,b) => a.atk - b.atk)
    arr_fire.reverse()
    arr.push(arr_fire[0])

    arr_grass.sort((a,b) => a.atk - b.atk)
    arr_grass.reverse()
    arr.push(arr_grass[0])

    arr_elec.sort((a,b) => a.atk - b.atk)
    arr_elec.reverse()
    arr.push(arr_elec[0])

    arr.sort((a,b) => a.atk - b.atk)
    arr.reverse()

    return arr
}

// const findPokeMostAtk = (poke) => {
//     let arr = []
//     for (let item of poke) {
//         if (item !== null) {arr.push(item)}
//     }

//     arr.reduce((p,c) => p[c.type] 
//     )
//     return 

// }

console.log(findPokeMostAtk(poke))