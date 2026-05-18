
// Generics - code that work with variety of data types, write functions, classes and
//            interfaces that work with different data types without having to duplicate code
// --------------------------------------------------------------------------------------
// getFirstElement<ElementType>(array: ElementType[]);
// ElementType is replace with our type that we pass in


// Example 1 - Problem - Accepts only number array
// If we use type of any the return type is of any as well
//
// function getFirstElement(array: (number | string)[]) {
//   return array[0];
// }
// console.log(getFirstElement([100, 200, 300]));
// console.log(getFirstElement(["Hello", "Hi" , "Hey"]));  // ERROR
// console.log(getFirstElement([true, false, true]));      // ERROR


// Example 1 - Solution - Want to change type based on what is passed in and returned
// function getFirstElement<ElementType>(array: ElementType[]): ElementType {
//   return array[0]
// }
// console.log(getFirstElement<number>([100, 200, 300]));
// console.log(getFirstElement<string>(["Hello", "Hi" , "Hey"]));
// console.log(getFirstElement<boolean>([true, false, true]));


// Example 2 - Problem
// const printString = (x: string) => console.log(x);
// const printNumber = (x: number) => console.log(x);
// const printBoolean = (x: boolean) => console.log(x);
// printString('Hello');
// printNumber(100);
// printBoolean(true);


// Example 2 - Solution
// function print<T, U>(x: T, y: U) {
//   console.log(x, y);
// }
// print<string, number>('Bye', 400);
// print<number, object>(500, { x: 100, y: 200});
// print<boolean, number>(false, 100);


// Example 3 - Problem - data type is any
// type ApiResponse = {
//   data: any,
//   isError: boolean
// }
// const response: ApiResponse = {
//   data: { firstName: 'Bob', lastName: 'Mark' },
//   isError: false
// }

// Example 3 - Solution
// Default value and must always be an object
//
// type ApiResponse<Data extends object = { status: number }> = {
//   data: Data,
//   isError: boolean
// }
// type UserResponse = ApiResponse<{ firstName: string, lastName: string }>
// type BlogResponse = ApiResponse<{ title: string; }>
//
// const userResponse: UserResponse = {
//   data: { firstName: 'Bob', lastName: 'Mark' },
//   isError: false
// }
// const blogResponse: BlogResponse = {
//   data: { title: 'title' },
//   isError: false
// }



// Example 4 - Classes
// class Box<T> {
//   private _content: T;
// 
//   constructor(content: T) {
//     this._content = content;
//   }
// 
//   get content() {
//     return this._content
//   }
// 
//   set content(newValue: T) {
//     this._content = newValue;
//   }
// }
// const box1 = new Box<number>(100);
// const box2 = new Box<string>('Hello');
// const box3 = new Box<boolean>(true);
// console.log(box1.content, box2.content, box3.content);
// box1.content = 500;
// box2.content = 'Bye';
// box3.content = false;
// console.log(box1.content, box2.content, box3.content);
