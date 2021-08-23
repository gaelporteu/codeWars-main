function stray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      if (numbers[i] === numbers[i + 2]) {
      } else {
        return numbers[i + 2];
      }
    } else if (numbers[i] !== numbers[i + 2]) {
      return numbers[i];
    }
  }
}

console.log(stray([2, 1, 1, ]));
