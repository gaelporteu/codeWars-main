// given a string of characters, return the character that appears the most often.

// Leons try
const str = "Go get";

function mostOften(str){
    const characters = {};

    for (const char of str) {
        characters[char] = characters[char] + 1 || 1
    }
    
    let mostCount = 0;
    let mostChar = null;

    for (const char in characters) {
        if (characters[char] > mostCount) {
            mostCount = characters[char];
            mostChar = char;
        }
    }
    return mostChar;
}

console.log(mostOften(str));