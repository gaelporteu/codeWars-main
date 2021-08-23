// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// solve(["abide","ABc","xyz"]),[4,3,0])
// solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7])
// solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3])

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Leon's solution with map
function numberInPostion(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // filter: does index of "a" in Abode match the indeOf "a" in the alphabet string
    arr.map(s => s.toLowerCase().split('').filter((e,i) => i === alphabet.indexOf(e)).length)
  }

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// first tryyy not good
// const findUniq = arr => {
//     return arr.map(el => efilter(el => el !== arr[i]))
// }

// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))

// leons try

// const findUniq = arr => {
//     arr.sort((a,b) => a-b)
//     return arr[0] === arr[1] ? arr.pop() : arr[0]
// }

// console.log(findUniq([4, 4, -1]));

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]


// Leon's try
const removeSmallest = numbers => {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

console.log(removeSmallest([2,2,1,2,1]));