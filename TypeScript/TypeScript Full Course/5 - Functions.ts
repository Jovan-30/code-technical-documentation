// Function Parameter Annotations - types of the parameters that a function takes
// --------------------------------------------------------------------------------------
// If you provide more or less arguments then you specifiy in your parameter
// Can set default parameters

// Example 1:
// function add(number: number = 100): number {
//   return number + 100;
// }
// const addNumbers = (numberOne: number, numberTwo: number): number => numberOne + numberTwo
// console.log(add(500));
// console.log(add());
// console.log(addNumbers(100, 200));




// Void - return value of a function that doesn't return a value (absence of any value)
// --------------------------------------------------------------------------------------
// Example 1:
// function hello(): void {
//   console.log('Hello');
// };

// Example 2 - Type Inference
// function test() {
//   return;
// }



// Never - used to indicate that a function will not return anything or that a variable
//         can never have a value
// --------------------------------------------------------------------------------------
// Used to inidicate that certain code paths should never be reached or that certain values
// are imporrsible

// Catch errors at compiler time instead of runtime

// 1. A function that always throws error
//
// function throwError(message: string): never {
//   throw new Error(message);
// }
//

// 2. A function that has an infinite loop
//
// function infiniteLoop(): never {
//   while (true) { }
// }

// 3. A variable that can never have a value
//
// let x: never;
// function neverReturns(): never {
//   while (true) { }
// }
// x = neverReturns();



// Function Overloading - allows multiple functions with the same name  but different
//                        parameters be defined, correct function is called based on type
//                        and order of arguments passed to the function at runtime
// --------------------------------------------------------------------------------------
// Example 1 - Main
// function add(x: number, y: number): number;
// function add(x: string, y: string): string;
// function add(x: any, y: any): any {
//   return x + y;
// }
// console.log(add(100, 200));
// console.log(add('Hello', ' World'));


// Example 2 - Generics
// function add<T>(x: T, y: T): T {
//   return (x as any) + (y as any);
// }
// console.log(add<number>(100, 200));
// console.log(add<string>("Hello", "!"));

