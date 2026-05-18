// Javascript - interactive for the website
// --------------------------------------------------------------------------------------
// More javascript we have to determine how to work with each browser DOM (jQuery was solution)




// Single Page Application - stay on the same page entire time and the javascript simply
//                           changes/updates the DOM
// --------------------------------------------------------------------------------------
// Don't need to communicate with web server to load new pages
// Faster interaction, because we are not reloading the page




// Imperative   - code that describes how to perform a tasks step-by-step (how to do things)
// Declarative  - code that describes what the outcome should be, what should happen
//                (not how to do things)
// --------------------------------------------------------------------------------------




// Document Object Model (DOM) - what browser uses to display website
// --------------------------------------------------------------------------------------
// Tree representation of page
// Javascript manipulates the DOM
// Imperative programming




// Virtual DOM - javascript version of DOM
// --------------------------------------------------------------------------------------
// tree like object that gives React a blueprint how to update actual DOM




// React Main Concepts
// --------------------------------------------------------------------------------------
// React declarative approach

// 1. Do not change the DOM / State (Data Of Our App)
// DOM manipulation takes a long time for changes (change element and add to page, relocate elements)
// React takes care of DOM, it asks to declare what app state looks like (object blueprint)
// Name React says based on state of app, react to it and change everything for you

// 2. Component Architecture
// Reusable components that create the app
// Components are just plain javascript functions or can be built as a class

// 3. One Way Data Flow
// Data can never move up, thus all changes only go down
// React creates a virtualDOM, as soon as state change, it lets everybody below that the state changed
// Any time we want to change website, the data has to change

// 4. UI Library
// React is just the user interface the rest is up to you (Stove of the kitchen, everything else is you)
// Eveyrthing else is use modules or other libraries to customize your project
// Makes no assumption of technology stack




// Good React Developer?
// --------------------------------------------------------------------------------------
// 1. Decide on component
// 2. Decide the state and where it lives
// 3. What changes (virutal DOM) when state changes