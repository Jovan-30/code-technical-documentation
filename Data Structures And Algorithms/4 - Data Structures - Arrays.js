// Arrays
// --------------------------------------------------------------------------------------
// Arrays are stored in order

// Example
// const strings = ['a', 'b', 'c', 'd']; // 4 * 4 = 16 bytes of storage

// console.log(strings[2]);  // O(1)

// strings.push('e');        // O(1)
// console.log(strings);

// let newArray = new Array(3);
// newArray[0] = 1;
// newArray[1] = 2;
// newArray[2] = 3;
// newArray.push(4);
// console.log(newArray);  // O(n)

// strings.pop();
// console.log(strings);     // O(1)

// strings.unshift('z');     // O(n)
// console.log(strings);     // Now have to shift the indexes, looped through and reassigned indexes

// // Insert into index
// strings.splice(3, 0, 'alien');  // O(n)
// console.log(strings);           // Reassign the indexes

// strings.splice(1, 1);  // O(n)
// console.log(strings);  // Reassign the indexes
// console.log('---------------------------------------------')

// const searchElement = strings.find((element) => element === 'd'); // O(n)
// console.log(searchElement);

// console.log(strings.includes("a", 1)); // false  O(n)
// console.log(strings.includes('d', 2)); // true   O(n)
// console.log(strings.includes('b'));    // true   O(n)




// Static   - fixed in size, need to specify number of elements ahead of time
// Dynamic  - copy and rebuild array at new location of memory (with new memory if needed)
// --------------------------------------------------------------------------------------
// Javascript arrays are dynamic meaning they resize automatically

// When internal capacity of array is exceeded the engine copys to new location
// Thus, all elements are copied over which makes the operation O(n)






// Implementing an Array
// --------------------------------------------------------------------------------------
// class MyArray {
//   constructor(length, data) {
//     this.length = 0;
//     this.data = {}
//   }
//   get(index) {
//     return this.data[index]
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index)
//   }
// }
// const newArray = new MyArray();
// newArray.push('First Item');
// newArray.push(100);
// newArray.push('Hello');
// console.log(newArray.get(0));
// console.log(newArray.get(1));





// Strings - Arrays of characters
// --------------------------------------------------------------------------------------



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




// Interview - Merge Sorted Arrays
// --------------------------------------------------------------------------------------
// let array1 = [0, 3, 4, 31];
// let array2 = [4, 6, 30];

// // Example 1
// function mergeSortedArrays(arr1, arr2) {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays(array1, array2));


// Pros and Cons
// --------------------------------------------------------------------------------------
// Pros:
//  - Lookup
//  - Push/Pop
//  - Ordered - Close to each other in memory

// Cons;
//  - Slow inserts/delete
//  - Static array, have to declare memory ahead of time, but modern languages have dynamic














// Remove Duplicates from Sorted List
// Test Case:
let array1 = [1, 1, 2];
let array2 = [1, 1, 2, 3, 3];

function removeDuplicates(nums) {
  let set = new Set(nums);
  
  return [...set];
}

console.log(removeDuplicates(array1));
console.log(removeDuplicates(array2));