// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
// Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
// Test.assertEquals(high('take me to semynak'), 'semynak'); 

// Leon's try -- not working
function high (str) {
    const alphabet = " abcdefghijklmnopqrstuvwxz";
    // word is split into an array of letters, reduce will add the index of each letter for a total score
    const score = word => word.split("").reduce((a,c) => a + alphabet.indexOf(c), 0);

    let highestWord = "";
    let highestCount = 0;

    str.split(" ").forEach(w => {
        const scoreCheck = score(w);
        if (scoreCheck > highestCount) {
            highestWord = w;
            highestCount = scoreCheck;
        }
    })
    return highestWord;
}

console.log(high("man i need a taxi up to ubud"), "taxi");
console.log(high("to be or not to be"), "not");
console.log(high("qotedfdainlqzxcmremirrfrpfkmjk zypnygpkcuwporskzymxrolbtwtivy mhrdxpwvkjvhqxaouhiwwxtwfgdkvh ofnbbktrnsngahglvqrvyebxnqdxju"), "zypnygpkcuwporskzymxrolbtwtivy");


// found solution
function high(string){
    words = string.split(" ");
    
    var wordsObj = {};
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      wordsObj[word] = calcScore(word);
    }
    return Object.keys(wordsObj).sort(function(a, b){
      return wordsObj[b] - wordsObj[a]
    })[0];
  }
  
  function calcScore(word) {
    const alphabet= " abcdefghijklmnopqrstuvwxyz";
    chars = word.split("");
    var score = 0;
    chars.forEach(function(char) {
      score += alphabet.indexOf(char);
    });
    return score;
  }
  