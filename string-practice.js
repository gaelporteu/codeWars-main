// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// const a = "xyaabbbccccdefww"
// const b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// If only one is needed is to use set() or reduce()

// const a = "xyaabbbccccdefww"
// const b = "xxxxyyyyabklmopq"

// // first tryyyy
// function longString (a,b) {
//     const newStr = a.concat(b).split("").sort().filter((v,i,arr) => v!==arr[i-1]).join("")
//     console.log(newStr)
// }

// longString(a,b);

// const str1 = "xyaabbbccccdefww"
// const str2 = "xxxxyyyyabklmopq"

// // Leon's tryyyy
// const longestPossible = (str1, str2) => [...new Set(str1+str2)].sort().join("")

// console.log(longestPossible(str1,str2));


// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"


// first tryyy
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

// const sortNames = () => {
//    return s.toUpperCase().split(";").map(p => p.split(":").reverse().join(", ")).sort().join(" ").split(" ")
// }

// console.log(sortNames(s));

// Leon's try

// const meet = (s) => {
//     let newStr = s.toUpperCase().split(";").map(n => n.split(":").reverse().join(", ")).sort().join(") (")
//     return `(${newStr})`
// }

// console.log(meet("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const addSpace = (string) => {
    return string.split("").map(l => l.toUpperCase() === l ? ` ${l}` : l).join("")
}

console.log(addSpace("camelCase"), "camel Case");
console.log(addSpace("basketCaseHead"), "basket Case Head");

