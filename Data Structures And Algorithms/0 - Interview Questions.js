
// Interview - Reverse A String
// --------------------------------------------------------------------------------------
// let stringName = 'Hi My Name is Jovan';

// // Example 1
// function reverseString(string) {
//   let reverseString = [];

//   for (let i = string.length - 1; i >= 0; i--) {
//     reverseString.push(string[i]);
//   }
//   return reverseString.join('');
// }

// // Example 2
// function reverseString2(string) {
//   return string.split('').reverse().join('');
// }

// // Example 3
// const reverseString3 = str => [...str].reverse().join('');

// console.log(reverseString(stringName));
// console.log(reverseString2(stringName));
// console.log(reverseString3(stringName));





// Interview - First Recurring Character
// --------------------------------------------------------------------------------------
// Test Cases:
// let array1 = [2,5,1,2,3,5,1,2,4] // Return 2
// let array2 = [2,1,1,2,3,5,1,2,4] // Return 1
// let array3 = [2,3,4,5]           // Return undefined

// function firstRecurringCharacter(arr) {
//   const map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     let number = arr[i];

//     // if number does not exists add it to the map
//     if (!map.has(arr[i])) {
//       map.set(number, true);
//     } else {
//       // Otherwise if it exists already we have a recurring character
//       return number;
//     }
//   }
//   return undefined;
// }
// console.log(firstRecurringCharacter(array1));
// console.log(firstRecurringCharacter(array2));
// console.log(firstRecurringCharacter(array3));


