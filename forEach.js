// forEach method is not a replacement than the for loop
// excutes a provided function once on each element in an array
// can use a callback funtion
// has three arguments (parameters) 1. element (required) 2. index -- gives index of current element 3. array -- returns array

const numbers = [5,4,3,2,1,0]

console.log(numbers.forEach((number) => {
    number
}))

const newNumbers = [];

console.log(numbers.forEach((number) => {
    (number > 2) ? newNumbers.push(number) : false
}))
console.log(newNumbers)

const addThree = x => {
    x = x + 3;
    console.log(x)
}
numbers.forEach(addThree)

numbers.forEach((element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`)
})

const fruits = ["kiwi", "apple", "banana", "pear", "grapes", "lime", "orange", "lemon"]

fruits.forEach((fruit, index) => {
    console.log(`The fruit ${fruit} is at index ${index}`)
})