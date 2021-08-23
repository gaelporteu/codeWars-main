// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
// Leons try
const twoSum = (array, sum) => {
    const pairs = [];
    const store = [];

    for (let part1 of array) {
        const part2 = sum - part1;
        if (store.indexOf(part2) !== -1) {
            pairs.push([part1, part2]);
        }
        store.push(part1);
    }

    return pairs;
}

console.log(twoSum([1,2,2,3,4], 6));

// Leons second try
const sumObject = (array, sum) => {
    const pairs = [];
    const store = {};

    for (let part1 of array) {
        const part2 = sum - part1;

        if(!store[part2]){
            store[part1] = 1;
        } else {
            pairs.push([part1, part2])
        }
    }

    return pairs;
}

console.log(sumObject([1,2,2,3,4], 4));