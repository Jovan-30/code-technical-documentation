// Interface - define a contract for the shape of an object, properties and types that
//             an object must have, enforce a certain structure in code. Also be used for
//             shape of functions and classes.
// --------------------------------------------------------------------------------------
// Have to specify all properties the interface has

// Example 1 - Object
//
// interface Person {
//   firstName: string,
//   lastName: string,
//   location?: number
// }
// const examplePerson: Person = {
//   firstName: 'Bob',
//   lastName: 'Mark',
//   location: 100
// };
// console.log(`${examplePerson.firstName} ${examplePerson.lastName}`);


// Example 2 - Function
//
// interface MathOperation {
//   (x: number, y: number): number
// };
// const add: MathOperation = (a, b) => a + b;
// const subtract: MathOperation = (a, b) => a - b;
//
// console.log(add(100, 200));
// console.log(subtract(200, 100));


// Example 3 - Class
//
// interface Vehicle {
//   start(): void;
//   stop(): void;
// }
// class Car implements Vehicle {
//   start(): void {
//     console.log('Car is starting');
//   }
//   stop(): void {
//     console.log('Car is stopped')
//   }
// }
// const myCar = new Car();
// myCar.start();
// myCar.stop();



// Extending Interfaces - extend an interface by creating a new interface that inherits
//                        from the original interface
// --------------------------------------------------------------------------------------
// New interface can add properties or redefine the properties/methods of the original interface

// Example 1:
//
// interface Shape {
//   width: number,
//   height: number
// }
// interface Square extends Shape {
//   sideLength: number;
// }
// const square1: Square = {
//   width: 100,
//   height: 200,
//   sideLength: 500
// }




// Declaration Merging - extend an existing declaration, including interfaces
// --------------------------------------------------------------------------------------
// Interface can not be directly modified

// Example 1:
// interface Car {
//   brand: string,
//   start(): void
// }
//
// --- Declaration Merging ---
//
// interface Car {
//   model: string,
//   stop(): void
// }
// const myCar: Car = {
//   brand: 'brand',
//   model: 'model',
//   start() {
//     console.log('Start');
//   },
//   stop() {
//     console.log('stop');
//   }
// };
// myCar.start();
// myCar.stop();



