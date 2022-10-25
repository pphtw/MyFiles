function highAndLow(numbers){
    arr = numbers.split(' ')
    arr = arr.map((e) => parseInt(e))

    arr.sort((a,b) => a - b)
    const min = arr[0], max = arr[arr.length-1]

    return `${max} ${min}`
}

//test
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); //42 -9
console.log(highAndLow("1 2 3")); //3 1