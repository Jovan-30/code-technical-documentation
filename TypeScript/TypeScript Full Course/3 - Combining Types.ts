// Type Compatibility - two types are compatible if they have the same structure, regardless
//                      of their names
// --------------------------------------------------------------------------------------



// Type Aliases - create a new name for a type (custom type)
// --------------------------------------------------------------------------------------
// Example 1:
// type Name = string;
// type User = { name: Name; message: string; };
//
// const user: User = {
//   name: 'John',
//   message: 'Hello!';
// }

// Example 2
// type Person = {
//   firstName: string,
//   lastName: string,
//   isTrue: boolean;
// };
// const personOne: Person = {
//   firstName: 'Bob',
//   lastName: 'Mark',
//   isTrue: false
// }
// const printPerson = ({firstName, lastName}: Person) => console.log(`${firstName} ${lastName}`);
// printPerson(personOne);



// Intersection Types - a way to combine multiple types into a single type that includes
//                      all properties and methods
// --------------------------------------------------------------------------------------
// Example 1:
// type Person = { firstName: string, lastName: string; };
// type Employee = { readonly id: number, title: string, isWorking?: true }
// type PersonAndEmployee = Person & Employee;
//
// const bob: PersonAndEmployee = {
//   firstName: 'Bob',
//   lastName: 'Mark',
//   id: 100,
//   title: 'Hello'
// };



// Union Types - a type that can have one of several possible types, best for when we want
//               to allow a variable or parameter to accept multiple types
// --------------------------------------------------------------------------------------
// Example 1 - Variable that can be number or string
// let myName: string | number = 'Name';

// Example 2:
// type UserInfo = { first: string, last: string, location?: number; };
// type AccountInfo = { email: string, password: string; };
//
// let user: UserInfo | AccountInfo = {
//   first: 'Bob',
//   last: 'Mark',
// }

// Example 3:
// let items: (number | string)[] = [500, 200, 400, 'Hello', 'Bye'];
