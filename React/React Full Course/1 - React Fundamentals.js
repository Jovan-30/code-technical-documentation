// package.json
// --------------------------------------------------------------------------------------
// Metadata about our project and dependencies needed to run the project

// package-lock.json
// --------------------------------------------------------------------------------------
// Locks the dependencies and versions to ensure we have consistent builds

// Component - independant and reusable bits of code
// --------------------------------------------------------------------------------------
// Function and class components
// Always have to return JSX
// Export the component to render to the user interface

// JSX - allows us to write HTML in React
// --------------------------------------------------------------------------------------
// HTML and JavaScript combined
// Not HTML, compiled into JavaScript code
// One component is only allowed to return one element
// Expressions { 100 + 100 }

// Example 1:
// const App = () => {
//   const myName = 'Bob';
//   const add = (a, b) => a + b;
//   return (
//     <div>
//       <p>{100 + 100}</p>
//       <p>{myName}</p>
//       <p>{add(100, 200)}</p>
//     </div>
//   )
// };
// export default App;

// Render    - occurs when component first appears
// Re-render - any subsequent render of a component that is already mounted. Re-renders are
//             triggered when React needs to update the components user interface based on
//             its change in state or props
// --------------------------------------------------------------------------------------
// Both are the process of a component displaying its user interface
// When we change state in React the entire component will re-render

// Lists - render lists with map
// --------------------------------------------------------------------------------------
// Each item should have a unique key value, due to changing state of the array

// Example 1
// const App = () => {
//   const numbers = [1, 2, 3, 4, 5]
//   return (
//     <div>
//       {
//         numbers.map((number, index) => {
//           return (
//             <h1 key={`${number}-${index}`}>
//               {number}
//             </h1>
//           )
//         })
//       }
//     </div>
//   )
// };
// export default App;

// Props - arguments/data passed into React components
// --------------------------------------------------------------------------------------
// Pass from one component to another

// Example 1:
// const Hello = ({ name }) => {
//   return (
//     <section>
//       <p>{name}</p>
//     </section>
//   )
// };
// const App = () => {
//   return (
//     <div>
//       <Hello name="Bob" />
//     </div>
//   )
// };
// export default App;

// Example 2:
// const Card = ({ children }) => {
//   return (
//     <section>
//       <h1>{children}</h1>
//     </section>
//   )
// };
// const App = () => {
//   return (
//     <div>
//       <Card>
//         <div>Hello</div>
//         <div>World</div>
//       </Card>
//     </div>
//   )
// };
// export default App;

// Condtional Rendering - dynamically display different components based on specific conditions
// --------------------------------------------------------------------------------------
// Example 1/2:
// const ValidPassword = () => <h1>Valid</h1>
// const InvalidPassword = () => <h1>Invalid</h1>
// const Password = ({ isValid }) => {
//   // if (isValid) {
//   //   return <ValidPassword />
//   // }
//   // return <InvalidPassword />
//
//   return isValid ? <ValidPassword /> : <InvalidPassword />
// }
// const App = () => {
//   return (
//     <>
//       <Password isValid={true} />
//     </>
//   )
// };
// export default App;

// Example 2:
// const Cart = () => {
//   const items = ['Item1', 'Item2', "Item3"]
//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       {items.length > 0 && <h1>You have {items.length} in your cart</h1>}
//     </div>
//   )
// }
// const App = () => {
//   return (
//     <>
//       <Cart />
//     </>
//   )
// };
// export default App;

// Styles
// --------------------------------------------------------------------------------------
// Example 1 - Inline Styles
// <h1 style={{ color: "red", background: "blue" }}>Hello</h1>

// Example 2 -
// const styles = { color: "red", background: "blue" }
// <h1 style={styles}>Hello</h1>

// Events - actions within application (button click, typing in text field, mouse events)
// --------------------------------------------------------------------------------------
// Example 1:
// const Button = () => {
//   const handleClick = () => {
//     console.log(Math.round(Math.random() * 100))
//   }
//   return <button onClick={handleClick}>Click</button>;
// }

// Example 2 - On copy of text
// const Copy = () => {
//   const copyHandler = () => {
//     console.log('Copy');
//   }
//   return <p onCopy={copyHandler}> Hello </p>
// }

// Example 3:
// const Move = () => {
//   const moveHandler = () => {
//     alert('Mouse Moved');
//   }
//   return <p onMouseMove={moveHandler}>Hello</p>
// }

// Hooks - useful functions that hook into the internal (React state and lifecycle features)
//         of a functional component
// --------------------------------------------------------------------------------------
// use keyword means it is a hook

// State - a way to store and manage data that can change over time and affects how the
//         component renders.
// --------------------------------------------------------------------------------------
// useState - allows to track state in functional component
// const [current value, setter function] = useState(inital value)

// Example 1:
// import { useState } from "react";
// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const add = () => setCounter(count => count + 1);
//   return (
//     <section>
//       <h1>{counter}</h1>
//       <button onClick={add}>Add</button>

//     </section>
//   )
// };
// export default App;

// Example 2 - Updating Arrays
// const App = () => {
//   const [names, setNames] = useState(['Bob', 'Joe']);
//   const addName = () => setNames([...names, 'Mark'])
//   const removeName = () => setNames(names.filter(name => name != 'Joe'));
//   const updateName = () => {
//     setNames(names.map(name => name === 'Bob' ? 'Bob Smith' : name));
//   }
//   return (
//     <section>
//       {
//         names.map((name, index) => {
//           return (
//             <li key={`${name}-${index}`}>
//               {name}
//             </li>
//           )
//         })
//       }
//       <button onClick={addName}>Add</button>
//       <button onClick={removeName}>Remove</button>
//       <button onClick={updateName}>Update</button>
//     </section>
//   )
// };

// Example 3:
// import { useState } from "react";
// const App = () => {
//   const [movie, setMovie] = useState({
//     title: 'MOVIE',
//     ratings: 100
//   })
//   const { title, ratings } = movie;
//   const handleClick = () => {
//     // const copyMovie = {
//     //   ...movie,
//     //   ratings: 200
//     // }
//     setMovie({...movie, ratings: 200});
//   }
//   return (
//     <section>
//       <h1>Title - {title}</h1>
//       <h2>Ratings - {ratings}</h2>

//       <button onClick={handleClick}>Update Ratings</button>
//     </section>
//   )
// };
// export default App;

// Portal - to render a component into a DOM node that exists outside of the hierarchy of the
//          top component (modals, tooltips, dropdowns)
// --------------------------------------------------------------------------------------
// import { createPortal } from 'react-dom'
// return createPortal ( )
