// Variables - container to store value (type, name = value)
// ------------------------------------------------------------------------------------
// int x = 5;
//
// Java forces us to know the dype during compiler type to prevent runtime exceptions
//

// Primitive Types - data type that represent a single value
// ------------------------------------------------------------------------------------
// byte, short, int, long, (use for storing interger numbers)
// float, double, (floating point numbers, double have bigger range and higher precision)
// char, (unicode charater, also numeric value but translates that to unicode character)
// boolean (only hold true or false)
//
// Add f to end of float:
// float f = 3.2f;
//
// Add uppercase L to end of long values:
// long l = 12345678901L;
//
//

// Primitives - Immuatble - new one gets created when you overwrite its value, creates new
//                          value on a new piece of Java memory, not case for objects but they
//                          can be immutable
// ------------------------------------------------------------------------------------

// Operators - creating an output based on input (arithmethic, assignment, unary, relational)
// ------------------------------------------------------------------------------------
// Arithmetic Operators (+, -, /, *, %)         - all floating point and integer numbers
// Assignment Operators (=, +=, -=, *=, %=)
// Unary Operators (-x, !x, x++, ++x, x--, --x):
//
// int pre = 5;
// int post = 5;
// System.out.println(++pre);
// System.out.println(post++);
//
// Relational Operators (==, !=, >, <):
//
//

// String - for storing text (reference type - an object, call methods to perform operations)
// ------------------------------------------------------------------------------------
// String name = "Bob";
//
//

// Casting - converting data types
// ------------------------------------------------------------------------------------
// 1. Widening              - expands type from smaller to a larger (int to long)
// 2. Narrowing (explicit)  - expands type from larger to smaller (long to int):
//                            Narrowing can result in a loss of precision
//
// long l = 123;
// int i = (int) l;
//
// Problem - This will work with java
// byte b = -23
// char c = (char) b;
//
//

// Reference Types - objects (string, array)
// ------------------------------------------------------------------------------------
// .equals() - == for reference types, you are comparing reference of object and not value

// Arrays - store values of a certain type
// ------------------------------------------------------------------------------------
// int[] n = {1, 2, 3, 4, 5};
// int[] n = new int[5];      // empty array with default values {0, 0, 0, 0, 0}
//

// Stack - holds variables needed for running program and referenced to objects from methods
//         on heap
// ------------------------------------------------------------------------------------

// Heap - objects created on heap, on stack hold a pointer to memory location on heap
// ------------------------------------------------------------------------------------
// Reference to object lives on the stack
// Heap also holds object's primitives and references to other objects on the heap
//

// Pass by Value - a copy of the value gets created (primtives and objects)
// ------------------------------------------------------------------------------------
// Primitives send in a copy, original is not affected
// Objects send in a reference, changing object with copied reference is changing the object
