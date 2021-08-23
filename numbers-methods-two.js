// Math. is a built in JS object that perform Math methods on numbers
// Math.round()
// Math.ceil()
// Math.floor()
// Math.max()
// Math.min()

console.log(Math.round(13.699999))

console.log(Math.floor(4.999999999))

console.log(Math.ceil(4.022))

console.log(Math.max(1,2,2,4,3,10,10.3))

console.log(Math.min(1,2,3,.9, -1))

const array = [1,2,3,4];

// use the spread operator to pass the array into a method
console.log(Math.max(...array))