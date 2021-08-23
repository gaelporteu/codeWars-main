// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor) {
  // takes an array of numbers
  // returns all the numbers that are divisible by the divisor
  // puts them into a new array
  const numbers2 = numbers.filter((num) => num % divisor === 0);
  return numbers2;
}

divisibleBy([1, 2, 3, 4, 5, 6], 2);
