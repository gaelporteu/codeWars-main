// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Leon's try => hash map
// will loop through the array and place value in the object-> hash map
// linear time and linear space
const containDup = arr => {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] + 1 || 1;

        if (map[arr[i]] > 1) {
            return true;
        }
    }
    return false;
}