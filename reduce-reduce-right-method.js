// method that executes a function for each value of the array , from left to right, then reduces the array to a single value

// Five parameters: 1. Accumulator 2. Element 3. Index (optional) 4. Array (optional) 5. Initial value (optional)

const numbers = [0, 1, 2, 3, 4, 5, 6];

// this starts at 0, no initial value
console.log(numbers.reduce(function(acc, el) {
    return acc + el
    }))


// this starts at 5 not 0, 5 is the initial value
console.log(numbers.reduce(function(acc, el) {
    return acc + el
    }, 5))

// new practice assignment
const population = [
    {
        province: "Ontario",
        pop: 10,
    },
    {
        province: "British Columbia",
        pop: 8,
    },
    {
        province: "Quebec",
        pop: 7,
    },
    {
        province: "Alberta",
        pop: 5,
    }
]

console.log(population.reduce((acc, el) => {
    return el.pop + acc
},0))

// reduceRight -- same as reduce but starts from right and ends at the left