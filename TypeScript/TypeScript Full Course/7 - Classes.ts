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





// Access Modifiers - determine how properties and methods can be accessed from within
//                    and outside the class
// --------------------------------------------------------------------------------------
// 1. Public - properties and methods can be accessed from anywhere, both inside and outside class
//
// Example 1:
// class Person {
//   public first: string;
//   public last: string;
//   static count: number = 0;
//
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     Person.count++;
//   }
//
//   public getfullName() {
//     return `${this.first} ${this.last}`;
//   }
// }
// let person1 = new Person('Bob', 'Mark');
// console.log(person1.first, person1.last);
// console.log(person1.getfullName());
// console.log(Person.count);


// 2. Private - properties/methods can only be accessed from within the class they are defined in
//
// Example 1:
// class Person {
//   private first: string;
//   private last: string;
//   private static count: number = 0;
//
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     Person.count++;
//   }
//   public getfullName() {
//     return `${this.first} ${this.last}`;
//   }
//   public getUserCount() {
//     return Person.count
//   }
// }
// let person1 = new Person('Bob', 'Mark');
// let person2 = new Person('Bob', 'Mark');
// let person3 = new Person('Bob', 'Mark');
// console.log(person1.first, person1.last);  // ERROR NOW
// console.log(Person.count);                 // ERROR NOW
// console.log(person1.getfullName());
// console.log(person1.getUserCount());


// 3. Protected - properties and methods can be accessed from within the class they are defined in,
//                and any subclasses that extend the class
//
// Example 1:
//
// class Person {
//   private first: string;
//   private last: string;
//   protected name: string = 'Hello';
//   protected static userCount: number = 0;
//
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     Person.userCount++;
//   }
//   public getfullName(): string {
//     return `${this.first} ${this.last}`;
//   }
//   public getUserCount(): number {
//     return Person.userCount
//   }
// }
// class Employee extends Person {
//   private static employeeCount = 0;
//   private id: number;
//
//   constructor (first: string, last: string, id: number ) {
//     super(first, last);
//     this.id = id
//
//     Employee.employeeCount++;
//   }
//   public static getUserAndEmployeeCount(): string {
//     return `Person: ${Person.userCount}. Employee ${Employee.employeeCount}`;
//   }
//   public returnName() {
//     return this.name;
//   }
// }
// const user1 = new Person('John', 'Mark');
// const employee1 = new Employee('John', 'Mark', 100);
// const employee2 = new Employee('John', 'Mark', 100);
// console.log(employee1.getfullName());
// console.log(Employee.getUserAndEmployeeCount());
// console.log(employee2.returnName());




// Encapsulation - process of hiding the internal details of an object and showing only the
//                 necessary information to the outside
// --------------------------------------------------------------------------------------
// Promotes data integrity and security




// Getters/Setters - used to access and modify properties
// --------------------------------------------------------------------------------------
// Pros - Encapsulation, Validation (for setters like checking if negative number), Controlled
//        Access (prevent direct modification for private and protected properties)

// Example 1:
//
// class MyClass {
//   private _value: number = 100;
//
//   get value(): number {
//     return this._value
//   }
//
//   set value(newValue: number) {
//     if (newValue < 0) {
//       throw new Error("Can not be a negative");
//     }
//     this._value = newValue;
//   }
// }
// const instance = new MyClass();
// console.log(instance.value);
// // instance.value = -100;     // ERROR
// instance.value = 200;
// console.log(instance.value);
