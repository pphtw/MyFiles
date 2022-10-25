var romanToInt = function(s) {
    const roman = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let sum = 0
    
    for (let i = 0 ; i < s.length ; i++) {
        if ((s[i] === 'I' && (s[i+1] === 'V' || s[i+1] === 'X'))
        || (s[i] === 'X' && (s[i+1] === 'L' || s[i+1] === 'C'))
        || (s[i] === 'C' && (s[i+1] === 'D' || s[i+1] === 'M'))) {
            sum += roman[s[i+1]] - roman[s[i]] 
            i++
        }
        else{
            sum += roman[s[i]]
        }
    }
    return sum
};

console.log(romanToInt('III')) // 3
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994