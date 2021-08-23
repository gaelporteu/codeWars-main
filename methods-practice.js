// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example: // "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" // --> "alpha beta gamma delta alpha beta gamma delta"

// sting of words with duplicate words
// uppercase and lowercase words
// no numbers in the string

// return would be single word entries

function removeConsecutiveWords (str) {
    return str.split(" ").filter( (e,i,arr) => e != arr[i-1]).join(" ");
}

console.log(removeConsecutiveWords("alpha beta beta gamma gamma gamma"))


// strings are immutable -- arrays are not
const str = "We don't get got, we go get!"

console.log(str[4]);

console.log(str.slice(18,23));

console.log(str.charAt(0));

//Create a function that returns the capitilization of a name. No Arrays, No REGEX! //leon ~> Leon //bob ~> Bob //John ~> John

function capString (str) {
    return str[0].toUpperCase()+str.slice(1)
  }

console.log(capString("leon"));
console.log(capString("gael"));

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"

// non-optimized first try
function truncateOne (str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.slice(0, maxLength - 1)+"..."
    }
}

// optimized for solving it second time
function truncateTwo (str, maxLength) {
    return str.length <= maxLength ? str : str.slice(0, maxLength - 1)+"...";
}
console.log(truncateOne("What I'd like to tell on this topic is", 20));
console.log(truncateTwo("Hello", 15));

// includes -- string method
// Write a function checkForImposterSyndrome(str) that returns true if str contains 'not ready' or "can't interview yet", otherwise false


// first tryyyy
function checkForImposterSyndrome(str) {
    const lowerCaseString = str.toLowerCase();
    if ( lowerCaseString.includes("not ready") || lowerCaseString.includes("can't interview yet")) {
        return true
    } else {
        return false
    }
}


// second try
function checkForImposterSyndrome(str) {
    let lowerCaseString = str.toLowerCase();
    return lowerCaseString.includes("not ready") || lowerCaseString.includes("can't interview yet")
}
console.log(checkForImposterSyndrome("not ready"), true);


// Create a CamelCase Method where all words must have their first letter capitalized without spaces. // For instance: // "hello case" => "HelloCase" // "camel case word" => "CamelCaseWord"

function CamelCase (str){
    return str.split(" ").map( w => w[0].toUpperCase()+w.slice(1)).join("")
  }
  
  console.log(CamelCase("hello case"), "HelloCase")
  console.log(CamelCase("camel case word"), "CamelCaseWord")
  
  function camelCase (str) {
      for (char of str) {
          if (char.includes(" ")) {
              delete char
              return
            }
        }
    }

    console.log(camelCase("hello case"), "HelloCase")