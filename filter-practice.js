// creates a new array from the original array elements that pass a condition
// takes 3 parameters 1. element 2. index (optional) 3. array (optional)

const age = [35, 47, 52, 18, 21, 25, 30, 17, 15]

const adult = age.filter((element) => {
    return element >= 18;
})

console.log(adult);

const findMiddleAges = element => {
    if (element > 30 && element < 50) {
        console.log(element);
    }
}

const middleAge = age.filter(findMiddleAges);

age.filter((element, index) => {
    if (element > 30) {
        console.log(index)
    }
})

const daysMonth = [1, 7, 14, 21, 25, 28, 30]

const findDaysMonth = (element, index) => {
    if (index > 3) {
        console.log(`Day ${element} is at index ${index}`)
    }
}

daysMonth.filter(findDaysMonth)