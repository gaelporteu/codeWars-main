// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

const transText = (str) => {
    const newStr = str.split(" ");
    // console.log(newStr);
    for (let w of newStr) {
        const transformed = [];
        w.map(l => l.)
    }

}

console.log(transText("Example Input"), "iNPUT eXAMPLE");



// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
  // "Hello joB" ==> "hELLO JOb"
// You may assume the input only contain English alphabet and spaces.

//always string 
//reverse words 
//revese uppercase to lower case and lower case to uppercase. 

function upperToLower (str) {
    // reverse the order of words 
    let inverse = str.split(" ").reverse().join(" ")
  
    //change upper to lower and lower to upper
  return inverse.split("").map(letter => letter === letter.toUpperCase()? letter.toLowerCase():letter.toUpperCase()).join("")
    // return new string
  }
  
  console.log(upperToLower("Example Input"), "iNPUT eXAMPLE")
  console.log(upperToLower("Hello joB"), "hello joB")


  // option 2
  function stringTransformer(s) {
    return s.replace(/./g,m=>m.toUpperCase()==m?m.toLowerCase():m.toUpperCase()).split(' ').reverse().join(' ')
  }

  // option 3
  function stringTransformer(str) {
    let words = str.split(' ').reverse();
    let chars = words.join(' ').split('');
    let returnString = '';
    
    chars.forEach((char) => {
      returnString += (char == char.toUpperCase()) ? char.toLowerCase() : char.toUpperCase();
    });
    
    return returnString;
  }