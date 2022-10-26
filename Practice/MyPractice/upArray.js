function upArray(arr){
    arr.filter((e) => e !== null)
    if(arr.filter((e) => e < 0).length > 0 || arr.length === 0 || arr.filter((e) => e > 9).length > 0) return null;

    if(arr[0] === 0 || arr[arr.length -1] === 0){
        let last = arr[arr.length-1] + 1;
        return arr.map((e,i) => i === arr.length-1? e+1: e);
    }
    
    return String(parseInt(arr.join(''))+1).split('').map(e => Number(e));
}

//test
console.log(upArray([4,3,2,5]));// [4,3,2,6]
console.log(upArray([2,3,9,9]));// [2,4,0,0]
console.log(upArray(    [9,9]));// [1,0,0]
console.log(upArray(    [0,7]));// [0,8]
console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]));// [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]
console.log(upArray([1,-9])) //null
console.log(upArray([1,10])) // [1,1,1]
console.log(upArray([28])) // [2,9]
console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]));
console.log(upArray([0,1,9,0,3,0]));