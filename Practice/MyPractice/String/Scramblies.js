function scramble(str1, str2) {
    if (str1.length < str2.length) return false
    str2 = str2.split('');

    str1.split('').forEach((e) => {
        if(str2.includes(e)) str2.splice(str2.indexOf(e), 1)
    })
    
    return str2.length === 0
}
  

console.log(scramble('rkqodlw',           'world'      )); //true
console.log(scramble('cedewaraaossoqqyt', 'codewars'   )); //true
console.log(scramble('katas',             'steak'      )); //false
console.log(scramble('scriptjavx',        'javascript' )); //false