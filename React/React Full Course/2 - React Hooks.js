// useState
// --------------------------------------------------------------------------------------
// useState - allows to track state in functional component
// const [current value, setter function] = useState(inital value)




// useEffect - performing "side effects" in functional programming (operations that interact
//             with the outside word)
// --------------------------------------------------------------------------------------
// React components are expected to act like pure functions with respect to their props (
// thus given the same props, components should render the same output)

// Side effects are useful because fetching data is a side effect of our function running

// A function that runs and a dependancy array
// Dependancy array is an optional second argument that controls when the effect function re-runs
// useEffect(() => {}, []);

// Can not use conditional (if-else statements) around useEffect

// Example 0 - No dependancy array just runs everytime component re-renders

// Example 1 - Pass nothing, then it just runs on initial mount, re-render nothing happens
// Only run function on the mount
// useEffect(() => {}, []);

// Example 2 - Every time the state changes and the component re-renders because of state the function calls
// useEffect(() => {}, [value]);

// Exaample 1: Getting Data
// const App = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     async function getData() {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//       const data = await response.json();
//
//       if (data && data.length) {
//         setData(data)
//       }
//     }
//     getData();
//   }, []);
//   return (
//     <ul>
//       {
//         data.map(({ id, title, completed }, index) => {
//           return (
//             <li key={`${id}-${index}`}>
//               {id} - {title} - {completed}
//             </li>
//           )
//         })
//       }
//     </ul>
//   )
// };


// Props Drilling - passing props down through every level of the component tree
// --------------------------------------------------------------------------------------
// Not a great way to pass down data
// Solution - Context API




// Context API - manage and share state across component tree without having to pass props
//               down manually at every level
// --------------------------------------------------------------------------------------
// Share data across components, especially componenents that are deeply nested

// Provider - allows to wrap our value/data to the parts of you component tree where you
//            want the context to be available
// Consumer - allows any descendant component to use the context (useContext in modern React
//            instead of consumer)

// Provider is passing the data. Consumer is receiving the data.

// Context value is accessible to all components nested, thus do not need to wrap around other components
//
//       <Data.Provider value={name}>
//          <Data1.Provider value={name2}>
//            <ComponentA />
//          </Data1.Provider>
//       </Data.Provider>


// Example 1 - Passing Data from App to ComponentA --> ComponentC
// Example 1 - Better than props drilling but still not a good way to pass data.
// Example 1 - To many callback functions and all that
//
// import { createContext } from "react";
// import ComponentA from "./ComponentA";
// export const Data = createContext();
// export const Data1 = createContext();
// const App = () => {
//   const name = 'Bob';
//   const name2 = 'Mark'

//   return (
//     <section>
//       <Data.Provider value={name}>
//         <Data1.Provider value={name2}>
//           <ComponentA />
//         </Data1.Provider>
//       </Data.Provider>
//     </section>
//   )
// };
// export default App;
//
//
// import { Data, Data1 } from "./App";
// const ComponentC = () => {
//   return (
//     <Data.Consumer>
//       {(name) => {
//         return (
//           <Data1.Consumer>
//             {(name2) => {
//               return (
//                 <h1>{name} - {name2}</h1>
//               )
//             }}
//           </Data1.Consumer>
//         )
//       }}
//     </Data.Consumer>
//   )
// };
// export default ComponentC;





// useContext - access the context values provided by the Context objects direclty within
//              a functional component. Context provides a way to pass data through the
//              component tree without having to pass props down manually at every level
// --------------------------------------------------------------------------------------
// Example 1:
// export const Data = createContext();
// export const Data1 = createContext();
// const App = () => {
//   const name = 'Bob';
//   const name2 = 'Mark'
//
//   return (
//     <section>
//       <Data.Provider value={name}>
//         <Data1.Provider value={name2}>
//           <ComponentA />
//         </Data1.Provider>
//       </Data.Provider>
//     </section>
//   )
// };
//
//
// import { useContext } from "react";
// import { Data, Data1 } from "./App";
// const ComponentC = () => {
//   const name = useContext(Data);
//   const name2 = useContext(Data1);
//   return (
//     <section>
//       <h1>Names: {name} - {name2}</h1>
//     </section>
//   )
// };
// export default ComponentC;



// Example 2:
// import { UserProvider } from "./UserContext";
// import UserProfile from "./components/UserProfile";
// import UpdateUser from "./components/UpdateUser";
// const App = () => {
//   return (
//     <UserProvider>
//       <UserProfile />
//       <UpdateUser />
//     </UserProvider>
//   );
// };
// export default App;
//
//
// import { createContext, useState } from "react";
// // Create a Context
// const UserContext = createContext();
// // Create a Provider component
// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({ name: "John Doe" });
//   const updateUser = (newName) => {
//     setUser({ name: newName });
//   };
//   return (
//     <UserContext.Provider value={{ user, updateUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
// export { UserContext, UserProvider };
//
//
// import { useContext } from "react";
// import { UserContext } from "../UserContext";
// const UserProfile = () => {
//   const { user } = useContext(UserContext);

//   return (
//     <div>
//       <h1>User Profile</h1>
//       <p>Name: {user.name}</p>
//     </div>
//   );
// };
// export default UserProfile;
//
//
// import { useContext, useState } from "react";
// import { UserContext } from "../UserContext";
// const UpdateUser = () => {
//   const { updateUser } = useContext(UserContext);
//   const [newName, setNewName] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newName.trim()) {
//       updateUser(newName);
//       setNewName("");
//     }
//   };
//   return (
//     <div>
//       <h2>Update User Name</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={newName}
//           onChange={(e) => setNewName(e.target.value)}
//           placeholder="Enter new name"
//         />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };
// export default UpdateUser;




// useReducer - hook similar to useState but is designed for more complex state objects or
//              state transitions that involve multiple sub-values. Manage state in a
//              functional, immutable way
// --------------------------------------------------------------------------------------
// const [state, dispatch] = useReducer(reducer, initialState);

// initialState - initial value
// reducer      - describes how the state should changed based on actions (such as inputs)
// state        - current state value
// dispatch     - send actions to the reducer function, which updates that state

// reducer function should be a pure function

// useReducer   - managing complex state logic, "especially when transitions depend on previous state"
// Examples: counter (increment, decrement, reset), toggle button (on, standby, off)

// Example 1:
//
// import { useReducer } from "react"
//
// const initalState = { count: 0 };
//
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, count: state.count + 1 };
//     case 'decrement':
//       return { ...state, count: state.count - 1 };
//     case 'reset':
//       return { ...state, count: 0 };
//     default:
//       return state;
//   }
// }
// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initalState)
//   return (
//     <>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>Add</button>;
//       <button onClick={() => dispatch({ type: "decrement" })}>Subtract</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </>
//   )
// }
// export default App


// useReducer vs useState
// --------------------------------------------------------------------------------------
// useState     - independant state management
// useReducer   - managing complex state logic, especially when transitions depend on previous state



// useRef - provide a way to access and interact with DOM
//        - store a mutable value that persists across renders without causing
//          re-renders when it changes
// --------------------------------------------------------------------------------------
// Persist - refers to the ability of the value stored within a ref object to remain unchanged
//           across component re-renders

// Example 1 - provide a way to access and interact with DOM
//
// import { useRef } from "react"
// const App = () => {
//   const inputElement = useRef(null);
//   const focusInput = () => {
//     inputElement.current.focus();
//     inputElement.current.value = 'John Smith';
//   }
//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={() => focusInput()}>Focus & Write Name</button>
//     </>
//   )
// }
// export default App

// Example 2:
// import { useState, useRef, useEffect } from 'react';
// const App = () => {
//   const [name, setName] = useState("");
//   const count = useRef(0);
//
//   useEffect(() => {
//     count.current = count.current + 1;
//   });
//
//   return (
//     <>
//       <p>Type in the input field:</p>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }
// export default App;





// Caching - a performance technique that involves storing frequently accessed or computationally
//           expensive data in a temporary, high-speed storage location called a cache
// --------------------------------------------------------------------------------------
// Purpose - is to reduce the need to re-fetch or re-compute data from its original, slower source,
//           thus, speeding up the following requests for the same data (database, external API,
//           or complex calculations)
//
// Good for performance and reducing the load on resources (databases, APIs)





// Memoization - a specific technique primarily applied to (pure) functions that stores the results
//               of expensive function calls based on their input argument. When the function is
//               called again with the same argument the result is returned from the cache instead
//               of re-executing the function
// --------------------------------------------------------------------------------------
// Caching a value so it does not need to be recalculated






// Referential Equality - refers to whether two variables or values point to the exact location
//                        in memory, not just whether they have the same content
// --------------------------------------------------------------------------------------





// useMemo - cache the result of a calulcation between re-renders
// --------------------------------------------------------------------------------------
// Pros - when function you are calling is very slow
// Cons - useMemo function is called every single render and additional memory problems (since
//        we are storing a value into memory)

// Whenever we change state in React the entire component will re-render

// Thus, when we update a state in a component, the entire component re-renders (thus slow
// function gets called everytime we render component)

// Example 1 - Problem - Every time we change the state whether that's the number or dark state
// the slow function is run every time cause the entire component runs after every re-render (state
// change)
//
// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);
//   const doubleNumber = slowFunction(number);
//   const themeStyles = {
//     backgroundColor: dark ? 'black' : 'white',
//     color: dark ? 'white' : 'black'
//   }
//   return (
//     <div>
//       <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
//       <div style={themeStyles}>Double Number: {doubleNumber}</div>
//       <button onClick={() => setDark(dark => !dark)}>Change Theme</button>
//     </div>
//   )
// };
// const slowFunction = (number) => {
//   for (let i = 0; i < 1000000000; i++) { }
//   return number * 2;
// }

// Example 1 - Solution
// When our number changes we re-run the slowFunction, if no change we do not re-run the function
//
// const doubleNumber = useMemo(() => {
//   return slowFunction(number);
// }, [number]);

// Example 2 - Problem - When we change our number, theme change is run because of referential
// equality. Eveytime we run function new themeStyles is created and this new themStyles is not
// the same reference in memory as the last one. Thus, in order to make sure theme change is only
// updated when themeStyle objects is changed we useMemo
//
// const themeStyles = {
//   backgroundColor: dark ? 'black' : 'white',
//   color: dark ? 'white' : 'black'
// }
// useEffect(() => {
//   console.log('Change')
// }, [themeStyles])

// Example 2 - Solution - If our dark variable doesn't change we don't uodate our themeStyles
// thus, get the exact same reference the previous time we rendered our app.
//
// const themeStyles = useMemo(() => {
//   return {
//     backgroundColor: dark ? 'black' : 'white',
//     color: dark ? 'white' : 'black'
//   };
// }, [dark]);

// Example 2 Summary - If none of the internal workings changed then we ensure the reference of
// the object/array is the same as last time we rendered






// useCallback - cache a function definition between re-renders
// --------------------------------------------------------------------------------------
// Example 1  - Problem - When we change the theme we also get that update item
// getItems() - is being re-created every time we render our app component, thus new function
//              every time out component renders
//
// const List = ({ getItems }) => {
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     setItems(getItems);
//     console.log('Updating Items');
//   }, [getItems])
//   return items.map(item => <div key={item}>{item}</div>)
// };
// export default List;
//
// import List from "./List";
// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);
//   const getItems = () => {
//     return [number, Number(number) + 1, Number(number) + 2];
//   }
//   const themeStyles = {
//     backgroundColor: dark ? 'black' : 'white',
//     color: dark ? 'white' : 'black'
//   }
//   return (
//     <div style={themeStyles}>
//       <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
//       <button onClick={() => setDark(dark => !dark)}>Change Theme</button>
//       <List getItems={getItems} />
//     </div>
//   )
// };

// Example 1 - Solutions
// const getItems = useCallback(() => {
//   return [number, Number(number) + 1, Number(number) + 2];
// }, [number])

// const getItems = useCallback((add) => {
//   return [Number(number) + add, Number(number) + 1 + add, Number(number) + 2 + add];
// }, [number])
// setItems(getItems(5));






// Custom Hooks - javascript functions that start with prefix use and call other hooks within.
//                They allow you to extract and reuse logic that involves state or side effects.
// --------------------------------------------------------------------------------------
// Make components readable and maintainable

// Example 1:
// import { useState, useEffect } from "react";
// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     async function getData() {
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(data);

//     }
//     getData();
//   }, [])

//   return [data];
// };
// export default useFetch;
//
//
//
// const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')






// useId - generate unique ID's for components
// --------------------------------------------------------------------------------------
// Do not duplicate id for inputs just provide text after

// import { useId } from "react";
// const UniqueID = () => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={`${id}-email`}>Email</label>
//       <input type="email" id={`${id}-email`} />

//       <br />
//       <label htmlFor={`${id}-name`}>Name</label>
//       <input type="text" id={`${id}-name`} />
//     </div>
//   );
// };
// export default UniqueID;




// Best Practices
// --------------------------------------------------------------------------------------
// Good:
// Call hooks at top level of function components
// Call hooks at top level of custom hooks

// Bad:
// Do not call hooks inside of conditions or loops
// Do not call hooks in event handlers
// Do not call hooks in class components
// Do not call hooks inside try catch finally blocks