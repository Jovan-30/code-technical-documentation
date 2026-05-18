// Type Annotations - explicitly defining the data types of variables
// --------------------------------------------------------------------------------------
// let myVariable: type = value

// Catch errors early in development by being specific to what types of values can be assigned

// Example 1:
// let myName: string = 'John';
// let number: number = 100;
// let floatNumber: number = 100.99
// let isTrue: boolean = true;

// Example 2: void - return value of a function which doesn't return a value
//
// function hello(): void { console.log('Hello'); };
// function test() { return }

// Example 3: null (absent value) and undefined (uninitialized value)
//
// let value: undefined = undefined;
// let value: undefined;
// let value: null = null;




// Arrays - types of object that can store multiple values of the same data type
// --------------------------------------------------------------------------------------
// Example 1:
// const numbers: number[] = [100, 200, 300, 400, 500, 600, 700];
// const names: Array<string> = ['John', 'Bob', 'Mark']

// Example 2 - Multidimensional Array
// const singleDimension: number[] = [100, 200, 300, 400, 500];
// const multiDimnesion: number[][] = [[100, 200], [100, 200], [100, 200]];
// const tripleDimension: number[][][] = [[[100, 200], [100, 200]], [[100, 200], [100, 200]]];






// Tuples - an array with fixed number of elements, where each element can have different types
// --------------------------------------------------------------------------------------
// Example 1:
// let items: [string, number] = ["Hello", 100];
// let [first, second] = items;
// console.log(first, second);

// Example 2:
// const products: (number | string)[] = ['Hello', 200];

// Example 3:
// const games: [string, string, boolean] = ['Game 1', 'Game 2', false]






// Enums - define a set of named constants (collection of related values)
// --------------------------------------------------------------------------------------
// Initial value is set at 0, unless specified, then incremented by one unless the other values
// are set as well

// Example 1
// enum Directions {
//   UP = 100,
//   DOWN,
//   LEFT,
//   RIGHT
// }
// console.log(Directions.RIGHT);

// Example 2:
// enum WeatherConditions {
//   Sunny = 'Sunny',
//   Cloudy = 'Cloudy',
//   Rainy = 'Rainy',
//   Snowy = 'Snowy'
// }
// console.log(WeatherConditions.Rainy);






// Object - can have specfic types and the object can be annotated with a type, often defined
//          using an interface or type alias
// --------------------------------------------------------------------------------------
// Structural Typing - shape of object (its structure or properties) matters for type compatibility

// Example 1:
// const person: { firstName: string; lastName: string; } = {
//   firstName: 'John',
//   lastName: 'Bob'
// }
// console.log(`Hello ${person.firstName} ${person.lastName}!`)

// Example 2
// function printUser(): { name: string, location: number; } {
//   return {
//     name: 'Bob',
//     location: 100
//   }
// }




// Optional Properties - make a certain property optional in an object type with a question mark (?)
// --------------------------------------------------------------------------------------
// Example 1:
// type Person = { firstName: string, lastName: string, isTrue?: boolean; };
//
// const personOne: Person = { firstName: 'Bob', lastName: 'Mark', isTrue: false }
// const personTwo: Person = { firstName: 'Mark', lastName: 'John'}
//
// const printPerson = ({firstName, lastName}: Person) => console.log(`${firstName} ${lastName}`);
// printPerson(personOne);
// printPerson(personTwo);




// Readonly Property - can only read property can not change the value
// --------------------------------------------------------------------------------------
// Example 1
// type Person = { readonly firstName: string, readonly lastName: string, isTrue?: boolean; };
//
// const personOne: Person = { firstName: 'Bob', lastName: 'Mark', isTrue: false }
// const personTwo: Person = { firstName: 'Mark', lastName: 'John'}
//
// const printPerson = ({firstName, lastName}: Person) => console.log(`${firstName} ${lastName}`);
// printPerson(personOne);
// printPerson(personTwo);




// Classes - blueprints that provide structure when creating objects
// --------------------------------------------------------------------------------------
// Example 1:
// class Person {
//   firstName: string;
//   lastName: string;

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName
//   }
// }
// const personOne = new Person('Bob', 'Mark');





// Any Type - a type that can be used to represent any type, disable all type checking for the
//            variable and its properties
// --------------------------------------------------------------------------------------
// Overuse of any can lead to untyped code making it harder to catch type-related bugs during
// development

// Better to use more specific types

// Example 1:
// let color: any = 'string';
// color = 100;
// color = true;
// console.log(color);





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




// Type Inference - feature that allows the compiler to automatically determine the type of
//                  a variable based on its value
// --------------------------------------------------------------------------------------
// TypeScript will infer the type based on the value you assign to it

// Example 1:
// let string = 'Hello';
// console.log(typeof string);