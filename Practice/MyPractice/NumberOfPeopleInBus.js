var number = function(busStops){
    // let up = 0, down =0 
    // let arr = busStops.map(e => e.at(0))
    // let upSum = arr.reduce((prev,current) => prev + current, up)
    // arr = busStops.map(e => e.at(1))
    // let downSum = arr.reduce((prev,current) => prev + current, down)

    // // let upSum = (busStops.map((e)=>e.at(0))).reduce((prev,current) => prev + current, up)
    // // let downSum = (busStops.map((e)=>e.at(1))).reduce((prev,current) => prev + current, down)

    let sum = busStops.reduce((prev, current) =>{
        return prev + current[0] - current[1]
    }, 0)

    return sum
}



//test
console.log(number([[10,0],[3,5],[5,8]])); // 5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])); //17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])); //21
console.log(number([[0,0]])); //0