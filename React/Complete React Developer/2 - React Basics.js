// How a website works?
// --------------------------------------------------------------------------------------
// HTML - structure element, CSS - styles pages, Javascript - interaction
// Need to fetch data from backend server



// Compiler/Transpiler/Bundler - take code in one format and transform code in another format
// --------------------------------------------------------------------------------------
// React code is run through these and get javascript that browser can understand



// Vite - takes React (JSX, styled CSS) all get formatted into HTML, CSS, Javascript that
//        a browser can understand
// --------------------------------------------------------------------------------------



// Module  - is a single javascript file that contains some reasonable functionality
// Package - a directory with one or modules inside of it and a package.json file which has
//           metadata about the package
// --------------------------------------------------------------------------------------



// node_modules - folder contains all packages and dependencies
// --------------------------------------------------------------------------------------



// public - contains static assets file that we don't need Vite to bundle (images)
// --------------------------------------------------------------------------------------
// Every file we bundle into the final thing without any processing it



// src - contains all different files related to javascript or css
// --------------------------------------------------------------------------------------



// .gitignore - ignore files when pushed to git
// --------------------------------------------------------------------------------------



// package.json - a JSON file that contains metadata about application we are creating
// --------------------------------------------------------------------------------------
// dependencies - different packages we need when in production
// devDependencies - need when in development, don't need in production



// package-lock.json - lock the exact versions of all installed dependencies and sub-
//                     dependencies, ensuring consistent builds
// --------------------------------------------------------------------------------------



// eslint.config.js - rules to put in for anyone writing code in this application
// --------------------------------------------------------------------------------------
// Best practices for coding



// vite.config.js - configures Vite to run its build and know what it needs to do (during build)
// --------------------------------------------------------------------------------------



// Vite scripts - different commands we can run in the application
// --------------------------------------------------------------------------------------



// react      - engine that drives the UI library
// react-dom  - translates to browser DOM (other libraries for mobile, virtual reality)
// --------------------------------------------------------------------------------------



// index.html -
// --------------------------------------------------------------------------------------
// <div> with an id of root
// <script src="/src/main.jsx"> entry point of javascript file that represents our application



// main.jsx - loads in inital React application
// --------------------------------------------------------------------------------------



// JSX (Javascript Syntax Extension) - combines javascript and HTML (write javascript that is like HTML)
// --------------------------------------------------------------------------------------
// Not HTML elements
// <App /> is a function



// createRoot - wants to create the React application
// --------------------------------------------------------------------------------------
// Get the <div> with id of root
// Render whatever is inside which is <App />



// StrictMode - checks for bad practices and if we are writing old React code
// --------------------------------------------------------------------------------------



// React Fragment - A containing tag but is not there when we render
// --------------------------------------------------------------------------------------



// State - object or set of values that a component needs to remember and manage over
//         time, represents internal data
// --------------------------------------------------------------------------------------
// Manage changing data in an application
// When state changes we re-render



// Components - self-contained reusable code, break down complex user interface into smaller pieces
// --------------------------------------------------------------------------------------



// Hooks - useful functions that hook into the internal (React state and lifecycle features)
//         of a functional component
// --------------------------------------------------------------------------------------
// use keyword means it is a hook




// useState - store value and reflect that value in the user interface that gets rendered
// --------------------------------------------------------------------------------------
// A tuple array that stores [current value, setter function that allows us to update value]
// = useState() is to initialize the value

// Setter function can receive a value or function
// setCount(1000);
// setCount(() => setCount(count => count + 1))

// The example below works but if we have a local scope count variable we may have issues
// setCount(() => {
//  let count = 100;
//  setCount(count + 1))
// }

// Main Example:
// const [count, setCount] = useState(0)




// Props - properties (data) passing into a component (components can be dynamic and reusable
//         accepting different data inputs)
// --------------------------------------------------------------------------------------
// Is an object with a key value pair

// Example 1:
// const Card = (props) => {
//   return (
//     <div>
//       <p>{props.name}</p>
//     </div>
//   )
// }



// Iterating Components Through an Array
// --------------------------------------------------------------------------------------
// Use map instead of forEach because map returns a new array of elements

// Example:
// const App = () => {
//   const array1 = ['a', 'b', 'c']
//
//   return (
//     <>
//       {
//         array1.map((name, index) => {
//           return (
//             <Card key={`${name}-${index}`} name={name} />
//           )
//         })
//       }
//     </>
//   )
// }
//
// export default App

// This is what map returns, forEach returns undefined not providing React elements that
// can be rendered:
// [
//   <Card name="a" />,
//   <Card name="b" />,
//   <Card name="c" />
// ]

// When you surround an array of React elements inside { } React knows how to handle it
// It renders each element in order similar to this:
// <>
//  <Card key="a" name="a" />
//  <Card key="b" name="b" />
//  <Card key="c" name="c" />
// </>

// Need key so it knows what item to change since the data is dynamic






// Rendering - Taking a component and translating it into a user interface
// --------------------------------------------------------------------------------------
// Everytime a user interface loads, changes, etc. it's rendering




// Mounting - components loading in for the first time (initial rendering)
// --------------------------------------------------------------------------------------
// Mounting components for the first time

// Card component is intially-rendered now we add text to the card from database, this is
// a re-render (updating the user interface)



// Re-render
// --------------------------------------------------------------------------------------
// Changes in state cause a component to re-render

// Card component is intially-rendered now we add text to the card from database, this is
// a re-render (updating the user interface)



// Arrays re-rendering
// --------------------------------------------------------------------------------------
// Return a new array/object because of pass by reference, don't just modify the original

// React relies on changes of reference to know when to re-render. Thus creating a new
// array/object signals to React that something changed

// Example
// const App = () => {
//   const [array, setArray] = useState(['a', 'b', 'c']);
//   return (
//     <>
//       {
//         array.map((name, index) => {
//           return (
//             <Card key={`${name}-${index}`} name={name} />
//           )
//         })
//       }
//       <button onClick={() => {
//         setArray(array => [...array, 'd']);
//       }}>
//         Add Letter
//       </button>
//     </>
//   )
// }
// export default App



// useEffect - performing "side effects" in functional programming (operations that interact
//             with the outside word)
// --------------------------------------------------------------------------------------
// React components are expected to act like pure functions with respect to their props (
// thus given the same props, components should render the same output)

// Side effects are useful because fetching data is a side effect of our function running

// A function that runs and a dependancy array
// Dependancy array is an optional second argument that controls when the effect function re-runs
// useEffect(() => {}, []);

// Example 1 - Pass nothing, then it just runs on initial mount, re-render nothing happens
// Only run function on the mount
// useEffect(() => {}, []);




// Eject - don't do for create React app
// --------------------------------------------------------------------------------------



// DOM vs Virtual DOM
// --------------------------------------------------------------------------------------
// Optimal way for React to make changes to real DOM

// Changing things on the DOM is expensive

// React makes a duplicate javascript DOM, javascript is quicker to make these changes
// React creates another copy of the DOM a snapshot and copy, makes changes in the copy
// Then it changes the snapshot with those changes and changes the real DOM from snapshot

// Virtual DOM modifies the correct DOM when it determines the actual things to re-render

// Virtual DOM significantly reduces the number of direct manipulations to the browser DOM:
// Thus, faster rendering and improved performance



// DOM Paint Flashing
// --------------------------------------------------------------------------------------
// Paint determines what is being rendered or re-rendered onto DOM (adds, changes, removes node)

// Re-painting - mounts, changes or removes nodes.

// The process that is expensive for DOM is the painting process

// DOM needs to reflow (not that expensive) when layout or components is added/changed




// React    - engine determines what to render and how
// ReactDOM - what we are tring to render to DOM (react-DOM is for browser)
// --------------------------------------------------------------------------------------
