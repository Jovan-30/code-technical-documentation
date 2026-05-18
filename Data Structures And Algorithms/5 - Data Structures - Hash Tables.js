// Hash Table - key and value are set
// --------------------------------------------------------------------------------------
// Different languages have built-in hash tables
//  Python: Dictionary
//  JavaScript: Object

// Insert   - O(1)
// Lookup   - O(1) - Ocassionaly O(n)
// Delete   - O(1)
// Search   - O(1)  - Can be O(n)

// Hash collisions slow down and result in O(n)

// How is 'apple': 100 stored?
// Step-by-step process:
// 1. Key Processing:
//    The key 'apple' (a string) is processed through a hash function to generate a hash code (a number).
// 2. Hash Function:
//    The hash function converts 'apple' into a hash value, for example, 100.
// 3. Indexing/Address Space:
//    The hash value is then mapped to an index in an internal array (buckets).
// 4. Storing the Key-Value Pair:
//    At the computed index (bucket), the key 'apple' and its value 100 are stored.

// +----------------------------+
// | Hash Table (Array of Buckets) |
// +----------------------------+
// | Index 0 | Index 1 | Index 2 | ... | Index N |
// |         |         |         |     |         |
// +---------+---------+---------+-----+---------+
// Suppose hash('apple') = 7
// Then, the pair is stored at index 7:

// Index 7:
// +----------------------+
// | Key: 'apple'        |
// | Value: 100          |
// +----------------------+


// Example 1
// let user = {
//   name: 'Bob',
//   magic: true,
//   talk: function () {
//     console.log("Hello!");
//   }
// }

// console.log(user.name); // O(1)
// user.talk();  // O(1)

// user.spell = 'This is a spell';   // O(1)
// console.log(user.spell, user);

// console.log(user.hasOwnProperty("name")); // O(1)

// delete user.name; // O(1)
// console.log(user);




// Hash Function O(1) - function that generates a hash value of fixed length for each input
// --------------------------------------------------------------------------------------
// Many types of hash functions

// Input (string  = 'hello') - Hash Function - Output (generates a random pattern/memory address -)
// Same input gets same output, unless for example you change the string

// Could take a long time after receiving/adding a value from memory due to hash function




// Hash Collisions - hashing two different keys may result in same value
// --------------------------------------------------------------------------------------
// Both 'apple' and 'orange' hash to index 7.

// Hash Table (Array of Buckets)
// +----------------------------+
// | Index 0 | Index 1 | Index 2 | ... | Index 7 | ... | Index N |
// |         |         |         |     |---------|     |         |
// |         |         |         |     | 'apple' |     |         |
// |         |         |         |     | 100     |     |         |
// |         |         |         |     | 'orange'|     |         |
// |         |         |         |     | 40      |     |         |
// +---------+---------+---------+-----+---------+-----+---------+


// Solutions: Many but some of the main are: linked lists and seperate chaining



// Maps - allows you to save any data type as a key (object only allows strings)
// Sets - only stores keys no values
// --------------------------------------------------------------------------------------
// Maps maintain insertion order, which object does not
// const map = new Map();
// const set = new Set();

// Example 1
// const map = new Map();
// map.set('apple', 60); // O(1)
// map.set('orange', 100);
// console.log(map);

// console.log(map.has('apple'));  // O(1)

// console.log(map.get('orange')); // O(1)

// map.delete('apple');  // O(1)
// console.log(map);









// Hash Tables vs Arrays
// --------------------------------------------------------------------------------------
// Faster when it comes to things like search, insert, delete.
// Quick to get certain values
// Great for databases
// Do not have to shift indexes (keys)
// Hash tables we can pick the keys


// No concepts of order in hash tables however






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


