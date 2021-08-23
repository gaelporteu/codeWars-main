// given a string of words or phrases, count the number of vowels, no regex

// Leons try
const countVowels = str => {
    let count = 0;
    const vowels = "aeiou";

    for (let char of str.toLowerCase()) {
        // here includes is constant
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello"));