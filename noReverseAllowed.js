
// Leons try
function reverseWord (str) {
    let newStr = "";
    for(let char of str) {
        newStr = char + newStr;
    }
    return newStr;
}

console.log(reverseWord("abc"))