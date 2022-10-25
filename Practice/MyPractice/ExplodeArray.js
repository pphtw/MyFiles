function explode(x){
    let arr = [];
    let typeNumber = (element) => typeof(element) === typeof(1);
    let typeString = (element) => typeof(element) === typeof(' ');

    if (x.every(typeString)) return 'Void!';

    if (x.every(typeNumber)) {
        for(let i= 0; i< (x[0]+x[1]) ; i++){
        arr.push(x)
        }
        return arr
    }

    if (x.some(typeNumber)){
        let n = x.filter(e => typeof(e) === typeof(1)) // n = [10] -> 10 คือเลข มันจะเหลือแค่ตัวเดียว
        for(let i = 0; i < parseInt(n) ; i++){ //parseInt คือเอา 10 ออกมาจาก Array ได้เป็น 10 เพรียวๆ
            arr.push(x)
        }
        return arr
    }
}

//test
console.log(explode([9, 3])); //[[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3])); //[['a', 3], ['a', 3], ['a', 3]]
console.log(explode([6, 'c'])); //[[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
console.log(explode(['a', 'b'])); //void
console.log(explode(["a", 0])); //[]