// creates new array the the results of calling a function for every element
// similar to forEach but it doesn't mutate original array and returns a value
// forEach doesn't return a value
// has 3 parameters 1. element 2. index 3. array

const numbers = [0, 1, 2, 3, 4, 5]

numbers.map((num) => {
    console.log(num * 2) 
})

// option 1
const numsToSquare = [9, 16, 25, 400, 900];

let squared = [];
numsToSquare.map( num => {
  squared.push(Math.sqrt(num));
})

console.log(squared)

// option 2
let newSquareRootArray = numsToSquare.map(Math.sqrt)
console.log(newSquareRootArray)


const people = [
    {firstname: "James", lastname: "Brown"},
    {firstname: "Tammy", lastname: "Swanson"},
    {firstname: "Michael", lastname: "Scott"},
];


// first try
const listNames = (element, index) => {
    const fullNames = [element.firstname, element.lastname];
    console.log(`${index}: ${fullNames.join(" ")}`);
}

people.map(listNames)


// second try
const newListNames = (element, index) => {
    const fullNames = [index + " : " + element.firstname, element.lastname].join(" ");
    console.log(fullNames);
}

people.map(newListNames)