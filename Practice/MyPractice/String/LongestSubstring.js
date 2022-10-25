// /**
//  * @param {string} s
//  * @return {number}
//  */
 var lengthOfLongestSubstring = function(s) {
    s = Array.from(s)
    s.pop(s[0])
    let uniqueChars = s.filter((element, index) => s.indexOf(element) === index)


    return uniqueChars.length
};

// //test
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('pwwkew'))



// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = chars.filter((element, index) => {
//     return chars.indexOf(element) === index;
// });

// console.log(uniqueChars);