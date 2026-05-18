// Given a function, create a function that lets users know whether these two arrays
// contain any common items (return true or false)
// 
// Test Case 1: False
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

// Test Case 2: True
const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];

// Questions
// Always going to be arrays?
// How large this array is going to get?
// Is our goal to be as efficient, time and space complexity?

// Seems like a nested loop to compare at first.
// How many inputs? What are the outputs?
// O(a * b) - Want to avoid this solution, easy, but not efficient
// O(1) space complexity not using any variables
// Example:
//
function shareCommonItems(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(shareCommonItems(array1, array2));
console.log(shareCommonItems(array3, array4));
console.log(`------------------------------------`)


// How do we turn O(a * b) into a faster solution:
// Solution:
// Convert first array into an object:
// array1 ==> object {a: true, b: true, c: true, x: true}
// O(a + b)
// O(n) space complexity
function shareCommonItems2(array1, array2) {
  // Loop through first array and create object where properties match array items
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      map[array1[i]] = true;
    }
  }

  // Loop through second array and check if items exist on created object
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}
console.log(shareCommonItems2(array1, array2));
console.log(shareCommonItems2(array3, array4));
console.log(`------------------------------------`)



// More readable way
// Google specific methods that are built in
function shareCommonItems3(array1, array2) {
  return array1.some(item => array2.includes(item))
}
console.log(shareCommonItems3(array1, array2));
console.log(shareCommonItems3(array3, array4));



