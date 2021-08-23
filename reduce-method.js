// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// first try
const array1 = [0, 1, 4];
const theAmazingAns = (a, c) => { 
   const ans = a + c;
   if (ans % 2 === 0) {
    return "even";
   } else {
    return "odd";
   }
};

console.log(array1.reduce(theAmazingAns));

// set up the test cases; odd ans and even ans
// reduce the value w ternary

// Leon's code
const sumEvenOrOdd = arr => arr.reduce((a, c) => a + c, 0) %
2 === 0 ? 'even' : 'odd';

console.log(sumEvenOrOdd([0, 1, 4]));
console.log(sumEvenOrOdd([0, -1, -5]));
