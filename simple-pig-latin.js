// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Pseudocode
// step 1 move first letter of each word to the end of word
// step 2 add "ay" to the end of the word after moving the letter

// The regex collects the 1st word character (\w) and assigns it to $1
// The regex collects the rest of the word's characters and assigns them to $2
// The replacement defines that the new string would be $2 then $1 and then "ay"


const pigIt = (str) => str.replace(/(\w)(\w*)/g, '$2$1ay')

console.log(pigIt('Pig latin is cool!'));