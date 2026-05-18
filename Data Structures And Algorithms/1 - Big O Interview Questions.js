// O(1)     - Constant Time
// O(n)     - Linear Time
// O(n^2)   - Quadratic Time

// Log all pairs of array
// --------------------------------------------------------------------------------------
// const boxes = [1, 2, 3, 4, 5];
//
// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//           console.log(`[${array[i]}, ${array[j]}]`);
//       }
//     }
//   }
// }
// logAllPairsOfArray(boxes);
// O(n * n)   --->    O(n^2)

// Nested Loops with Different Inputs
// --------------------------------------------------------------------------------------
// const boxes = [1, 2, 3, 4, 5];
// const boxes2 = [2, 4, 6, 8, 10];
//
// function logAllPairsOfArray(array, array2) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       console.log(`[${array[i]}, ${array2[j]}]`);
//     }
//   }
// }
// logAllPairsOfArray(boxes, boxes2);
// O(a * b)
