// useState
// --------------------------------------------------------------------------------------
// useState - allows to track state in functional component
// const [current value, setter function] = useState(inital value)

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
//

// Example 1:
// const [counter, setCounter] = useState(0);
//
// const increment = () => {
//   setCounter((prev) => prev + 1);
// };
// const decrement = () => {
//   setCounter((prev) => prev - 1);
// };
//
// return (
//   <>
//     <h1>{counter}</h1>
//     <button onClick={increment}>+</button>
//     <button onClick={decrement}>-</button>
//   </>
// );
//
//
//

// Arrays
// --------------------------------------------------------------------------------------
//
// const addItem = () => {
//   if (addInput) {
//     setItems([...items, addInput]);
//     setAddInput("");
//     setError("");
//     return;
//   }
//   setError("There is no input");
// };
//
// const deleteItem = (index: number) => {
//   setItems(items.filter((_, i) => index !== i));
// };
//
// const updateItem = (index: number, newItem: string) => {
//   if (newItem) {
//     const updateItems = [...items];
//     updateItems[index] = newItem;
//
//     setItems(updateItems);
//   }
// };
