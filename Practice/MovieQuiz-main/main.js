const movies = require('./movise.json').movies
let indexOfitem = null
let playList = []

let addMovie = (movies,...id) =>{
    id.forEach((x) => movies.filter((y) => y.id === x? playList.push(y) : y));
    return playList

    // for (let i = 0; i < id.length; i++) {
    //     for(let j = 0; j < movies.length; j++){
    //         if(movies[j].id === id[i]){
    //             playList.push(movies[j])
    //             continue //ถ้าเจอใน condition ก็ออกจาก if 
    //         }
    //     }        
    // }
}

let deleteMovie = (id) =>{
    let newPlaylist = playList.filter((x) => x.id !== id)
    return newPlaylist

    // let indexOfitem = null
    // let newPlayList = []
    // for (let i = 0; i < id.length; i++) {
    //     if(playList[i].id === id){
    //         indexOfitem = i
    //     }           
    // }
    // for (let j = 0; j<playList.length; j++){
    //     if(j != indexOfitem){
    //         newPlayList.push(playList[j])
    //     }
    // }
}

let swapMovie = (index_one, index_two) =>{
    [playList[index_one], playList[index_two]] = [playList[index_two], playList[index_one]]
    return playList
}


// test

console.log(addMovie(movies,20,100,73,75))
console.log(deleteMovie(20))
console.log(swapMovie(0, 2))