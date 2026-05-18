// Redux - managing state of an application in a predicatble way
// --------------------------------------------------------------------------------------
// Makes state management easy
//
//

// Redux Toolkit - official, batteries-included toolset for effeceint Redux development
// --------------------------------------------------------------------------------------
// Makes redux development easy to work with
// Can mutate state in toolkit
//

// Store - central place where state of app i stored
// --------------------------------------------------------------------------------------
// import { configureStore } from "@reduxjs/toolkit";
// export const store = configureStore({
//   reducer: {},
// });
//
//
// <Provider store={store}>
//   <App />
// </Provider>
//
//

// Slice - break down our redux store into more manageable parts
// --------------------------------------------------------------------------------------
// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
//
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload;
//     },
//   },
// });
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export default counterSlice.reducer;
//
//
//

// Reducers - what to do with each slice (increment and decrement (actions - requests/commands
//            to change initial state))
// --------------------------------------------------------------------------------------

// useSelector - read data;
// useDispatch - change the state, send action to the store
// --------------------------------------------------------------------------------------
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount } from "./counterSlice";

// const App = () => {
//   const count = useSelector((state: any) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       <button onClick={() => dispatch(incrementByAmount(100))}>Increase</button>
//     </>
//   );
// };
// export default App;
//
//
