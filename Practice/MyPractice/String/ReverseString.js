function reverse(str){
    str = str.split(' ')
    arr = str.map((element, index) => index % 2 === 0? element: element.split('').reverse().join(''))
    return arr.join(' ').trim()
  }

console.log(reverse("Reverse this string, please!")); //Reverse siht string, !esaelp
console.log(reverse("I really don't like reversing strings!")); //I yllaer don't ekil reversing !sgnirts