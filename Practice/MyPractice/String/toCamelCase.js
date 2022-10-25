function toCamelCase(str){
    if(str.length === 0) return ''
    let arr = str.includes('-') ? str.split('-'): str.includes('_')? str.split('_'): str

    const firstWord=arr[0]
    arr = arr.map((e)=> e.charAt(0).toUpperCase() + e.slice(1))

    firstWord !== arr[0]? arr[0] = firstWord : arr[0]
    return arr.join('')
}

//test
console.log(toCamelCase('')); //''
console.log(toCamelCase("the_stealth_warrior")); //theStealthWarrior
console.log(toCamelCase("The-Stealth-Warrior")); //TheStealthWarrior
console.log(toCamelCase("A-B-C")); //ABC