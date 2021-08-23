// converts a number to a string -- these are methods
// String()
// toString()
// toFixed() -- will convert number to string -- this will round up and down


// converts string to number -- these are built in functions
// Number() -- is a function
// parseFloat() -- is a function -- returns a floating number from a string, no rounding
// parseInt() -- is a function -- returns a whole number -- it rounds down always

const number = 500;
console.log(typeof number) 

const newString = number.toString()

console.log(typeof newString)
console.log(newString)

console.log(typeof String(number))

const money = 3;

console.log(money.toFixed(2));

const newmoney = "3.66";

console.log(Number(newmoney).toFixed())

console.log(parseInt(newmoney))

const needsParseFloat = "4.55"

console.log(parseFloat(needsParseFloat))