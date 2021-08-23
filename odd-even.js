function oddOrEven(array) {
    // The reduce is amazing as you can add an initial value of 0 or any value you want to start at.
    let sum = array.reduce(
        ((accumulator, currentValue) => accumulator += currentValue), 0
    )
    // This is where I had to remember how to work the modulo operator
    return (sum % 2 === 0) ? "even" : "odd";
 }