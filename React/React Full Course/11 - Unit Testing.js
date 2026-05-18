// Automated Tests Types
// --------------------------------------------------------------------------------------
// Unit Testing
// Integration Testing
// End to End Testing

// Unit Testing - test individual components of app (functions and classes) work as expected
//                and focus on isolated part of code
// --------------------------------------------------------------------------------------

// Integration Testing - different parts of application work together (module, database, API
//                       interact correctly)
// --------------------------------------------------------------------------------------

// End to End - entire app works from start to finish, client and server side
// --------------------------------------------------------------------------------------

// Frameworks
// --------------------------------------------------------------------------------------
// Jest
// Vitest - supports Typescript, JSX and it's very fast
// Cypress
//
//

// Assertion - if a value meets a certain condition
// --------------------------------------------------------------------------------------

// Vitest
// --------------------------------------------------------------------------------------
// Describe - group related test cases
// It/Test  - describes a specific test case
// Expect   - make assertions in our test case
//
// Example 1:
//
// import { describe, it, expect } from "vitest";
// import { add, subtract, multiply, divide } from "../src/mathUtils";
// describe("Math Utils", () => {
//   it("Should sum two numbers", () => {
//     expect(add(2, 3)).toBe(5);
//   });
// });
//
//
// Example 2:
// it("should throw error when divide by -", () => {
//   expect(() => divide(2, 0)).toThrow("Error - Division by 0");
// });
//
//
//

// Arrange  - everything you need for test (variables, mock data)
// Act      - perform action (call function)
// Assert   - expected result
// Pattern
// --------------------------------------------------------------------------------------
// it("Should sum two numbers", () => {
//   // Arrange
//   const a = 1;
//   const b = 2;
//
//   // Act
//   const result = a + b;
//
//   // Asset
//   expect(result).toBe(3);
// });
//
//
//

// Test Driven Development - first write a test, then write the code
// --------------------------------------------------------------------------------------

// Positive - system behaves as expected, correct or valid inputs
// Negative - invalid or unexpcted, incorrect or invalid inputs
// --------------------------------------------------------------------------------------
// it("negative testing", () => {} )
// it("positive testing", () => {})
//

// Boundary Testing - testing the edges or boundaries of input values
// --------------------------------------------------------------------------------------

// Parameterized Testing - test with multiple sets of inputs, without duplicate values
// --------------------------------------------------------------------------------------
