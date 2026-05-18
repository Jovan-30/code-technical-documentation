// Types Primer
// --------------------------------------------------------------------------------------
// Types are the gap between code that developers write and what computers can understand

// Typescript is converting our types for us
// More types the more information typescript has to check for mistakes




// Type Annotations - explicitly defining the data types of variables
// --------------------------------------------------------------------------------------
// Typescript automatically checks the code types behind has been type checking the code
// const myName = "Bob"; // Knows this is a string

// Example 1 - Don't need type annotations because typescript already determines it for us
// const myName: string = "Bob";
// const amount: number = 100 + 200;
// const hello: string = `${myName} is my name`;
// const yes: boolean = true;

// Example 2:
// function sum(number1: number, number2: number) {
//   const total = number1 + number2;
//   return total;
// }
// console.log(sum(100, 200));
// console.log(sum(200, 100));

// Example 3 - What data type the function must return
// function sum(number1: number, number2: number): number {
//   const total = number1 + number2;
//   return total;
// }
// console.log(sum(100, 200));
// console.log(sum(200, 100));




// Type Aliases - providing another name for something that already exists
// --------------------------------------------------------------------------------------
// For developer documentation

// Example 1:
// personName is a string as far as typescript is thinking
//
// type personName = string;
//
// const myName: personName = "Bob";
// const alsoMyName: string = "Joe"


// Example 2 - Bad Function
// function print(thing: string) {
//   console.log(`Name is ${thing}`);
// }
// print('a house')


// Example 2 - Good Function: We have a print name function that returns a person name
// type personName = string;
// function printName(name: personName) {
//   console.log(`Name is ${name}`);
// }
// printName('Bob');




// Object Type Aliases - defining type alias and what the type is going to be like
// --------------------------------------------------------------------------------------
// Still only for documentation for the developers

// Example 1:
// type Coordinates = {
//   x: number;
//   y: number;
// };
// const locationOne: Coordinates = { x: 500, y: 500 };
// const locationTwo: Coordinates = { x: 100, y: 200 };
// const xPosition = locationOne.x;
// const yPosition = locationOne.y;
//
// function printLocation(coordinates: Coordinates) {
//   console.log(coordinates.x, coordinates.y);
// }
// printLocation(locationOne);
// printLocation(locationTwo)
// printLocation({x: 100, y: 200});


// Example 2 - Nested
// type Coordinates = {
//   x: number;
//   y: number;
// };
// type theLocation = {
//   coordinates: Coordinates,
//   name: string
// }
// const coordinates: Coordinates = { x: 500, y: 500 };
// const locationOne: theLocation = { coordinates, name: 'Home' }
//
// function printLocation(location: theLocation) {
//   console.log(location.name, location.coordinates.x, location.coordinates.y);
// }
// printLocation(locationOne);




// Arrow Functions and Function Expressions
// --------------------------------------------------------------------------------------
// Example 1:
// const sum = function (number1: number, number2: number): number {
//   return number1 + number2;
// };
// const arrowFunction = (number1: number, number2: number): number => number1 + number2;
//
// console.log(sum(500, 500))
// console.log(arrowFunction(500, 500))



// Arrays
// --------------------------------------------------------------------------------------
// Example 1:
// const numbers: number[] = [1, 2, 3, 4, 5];
// const strings: string[] = ["Hello", "Hi", "Bye"];

// Example 2
// type Coordinates = {
//   x: number;
//   y: number;
// };
// const locationOne: Coordinates = { x: 500, y: 500 };
// const locationTwo: Coordinates = { x: 100, y: 200 };
// const arrayTest: Coordinates[] = [locationOne, locationTwo];




// Tuples - multiple different data types (fixed length and order)
// --------------------------------------------------------------------------------------
// Example 1:
// type Title = string;
// type PublishYear = number;
//
// type Book = [Title, PublishYear];
//
// const sample: Book = ["Book Name", 2020];
// console.log(sample[0], sample[1]);

// Example 2:
// const myName: string = "Bob";
// const year: number = 2025;
// const test: boolean = false;
//
// const person: [string, boolean, number] = [myName, test, year];
// console.log(person[0], person[1], person[2]);

// Example 3:
// function coordinates(): [number, number, string] {
//   return [100, 200, 'Hello'];
// }
// console.log(coordinates());

// Example 4: An array of tuples
// const arrayTest: [number, string][] = [
//   [100, "Hello"],
//   [300, "Bye"],
//   [400, "Hey"]
// ];
// console.log(arrayTest);



// Modular Code - organization of code (modules)
// --------------------------------------------------------------------------------------


// Modules
// --------------------------------------------------------------------------------------
// export type Points = {
//   x: number;
//   y: number;
// }

// Export with defaults means we don't need { } when importing