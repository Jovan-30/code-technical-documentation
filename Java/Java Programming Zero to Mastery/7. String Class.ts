// String Class - class that represents text (string of characters)
// ------------------------------------------------------------------------------------
// String literal - String name = "Hello"
// New Keyword    - String name = new Name("Bob")
//

// Methods
// ------------------------------------------------------------------------------------
//
// indexof();
// String text = "Java is fun and Java is powerful";
//
// // 1. Find a character
// int firstA = text.indexOf('a');       // Returns 1
//
// // 2. Find a substring
// int firstJava = text.indexOf("Java"); // Returns 0
//
// // 3. Find substring after a certain point
// int secondJava = text.indexOf("Java", 5); // Returns 16
//
//
// // 4. Value not found
// int missing = text.indexOf("Python");  // Returns -1
//
// trim()       - remove whitespace
//
//
// substring()  - substring(3, 5);
//
//
// contains()   - string.toLowerCase().contains("string")
//
//

// String Immutability - string can't be changed, new value assigned is stored in seperate
//                       object and the variable will hold reference to the new object
// ------------------------------------------------------------------------------------
//
// String s1 = "S"
// s1 = "new value" // new object created, variable holds reference to new object
//
//
// String s1 = "Hi"
// String s2 = s1;
// print
// s1 = "Hello"
// print
//
// Result: Hi Hi | Hello Hi
//

// Thread Safe - when multiple threads access same object/code, the program still works correctly
// ------------------------------------------------------------------------------------
// String will not be changed by another thread while using it

// Equals
// ------------------------------------------------------------------------------------
// == will compare reference so use .equals (for objects as well)
//
//

// String Pool - speical memory area where string literals are stored (only string literals)
// ------------------------------------------------------------------------------------
// If a string already exists, reuse the same existing string object and return a reference to it
//
// Example:
// s1 = "Hi" and s2 = "Hi"
// Thus, s1 == s2 now equals true
//
//

// StringBuilder - mutable string you can modify value after its been created
// ------------------------------------------------------------------------------------
