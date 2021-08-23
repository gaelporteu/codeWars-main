// Remove the spaces from the string, then return the resultant string. One solution must use filter!

// can use split to remove spaces

// first try with split
const removeSpacesFromString = str => str.split(" ").join("");

console.log(removeSpacesFromString("Hello Word"));

// second try with filter
const removeSpacesWithFilter = (str) => {
    return [...str].filter(x => x !== " ").join("");
}

console.log(removeSpacesWithFilter(`What'cha talkin' about Willis!`));






// You will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

// first tryyyyy
function mixedString (str) {
    let letters = str.split(' ')
    let uppers = letters.filter(el=>el === el.toUpperCase)
  
    if (uppers.length > str.length / 2) {
        return str.toUpperCase()
    } else {
        return str.toLowerCase()
    }
}

console.log(mixedString("Code"));

// Leon's method
const convertString = str => str.split('').filter(x => x === x.toUpperCase()).length > str.length / 2 ? str.toUpperCase() : str.toLowerCase()

console.log(convertString("WhatISUP"));