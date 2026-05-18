// Type Guards - way to narrow down the type of a variable
// --------------------------------------------------------------------------------------

// Type Narrowing - refining a variable's type within a conditional block of code
// --------------------------------------------------------------------------------------


// typeof - check the variable type
// --------------------------------------------------------------------------------------
// Example 1:
// type MyVaule = string | number;
// const exampleFunction = (value: MyVaule) => {
//   if (typeof value === 'string') {
//     console.log('string');
//   } else {
//   console.log('number')
//   }
// };
// exampleFunction('Hello');
// exampleFunction(100);


// instanceof - check whether object is an instance of a class or function
// --------------------------------------------------------------------------------------
// Example 1:
// class Bird {
//   fly(): void {
//     console.log('Bird if flying');
//   }
// }
// const bird1 = new Bird();
// 
// if (bird1 instanceof Bird) {
//   bird1.fly();
// } else {
//   console.log(`Not a bird`);
// }