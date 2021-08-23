// Given a phrase reverse words

function reverseWords (str) {
    const revWords = [];
    str.split(" ").forEach(w => {
        let currentWordRev = "";
        for (let i = w.length -1; i >= 0; i--) {
            currentWordRev += w[i];
        }
        revWords.push(currentWordRev);
    })
    return revWords.join(" ")
}

console.log(reverseWords("I love dogs"));