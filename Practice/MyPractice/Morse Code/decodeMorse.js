decodeMorse = function(morseCode){
    let morse = {
        '...---...':'SOS',
        '.-'    : 'A',
        '-...'  : 'B',
        '-.-.'  : 'C',
        '-..'   : 'D',
        '.'     : 'E',
        '..-.'  : 'F',
        '--.'  : 'G',
        '....'  : 'H',
        '..'    : 'I',
        '.---'  : 'J',
        '-.-'   : 'K',
        '.-..'  : 'L',
        '--'    : 'M',
        '-.'    : 'N',
        '---'   : 'O',
        '.--.'  : 'P',
        '--.-'  : 'Q',
        '.-.'   : 'R',
        '...'   : 'S',
        '-'     : 'T',
        '..-'   : 'U',
        '...-'  : 'V',
        '.--'   : 'W',
        '-..-'  : 'X',
        '-.--'  : 'Y',
        '--..'  : 'Z',
        '.----' : '1',
        '..---' : '2',
        '...--' : '3',
        '....-' : '4',
        '.....' : '5',
        '-....' : '6',
        '--...' : '7',
        '---..' : '8',
        '----.' : '9',
        '-----' : '0',
        '-.-.--': '!',
        '.-.-.-': '.',
        '..--..': '?',
        '--..--': ',',
        '-.-.-.': ',',
        '---...': ':',
        '.-.-.' : '+',
        '-....-': '-',
        '-..-.' : '/',
        '-...-' : '='
    }

    let morseArr
    if(morseCode.includes('   ')) {
        morseArr = morseCode.split('   ');//words
        morseArr = morseArr.map((e)=> e.split(' '))
        let string = morseArr.map(e => e.map(e => morse[e]));

        return string.map((e)=> e.join('')).join(' ').trim()
    }
    else {
        morseArr = morseCode.split(' ');
        let string = morseArr.map(e => morse[e]);

        return string.join('')
    }
    
}

//test

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
console.log(decodeMorse('... --- ...'));