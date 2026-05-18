// Zustand - state management library
// --------------------------------------------------------------------------------------
//
//

// Custom Hook
// --------------------------------------------------------------------------------------
// import { create } from "zustand";
//
// interface CounterStore {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
// }
//
// export const useCounter = create<CounterStore>((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));
//
//
//
//
// function App() {
//   const count = useCounter((state) => state.count);
//   return (
//     <>
//       <h1>Count {count}</h1>
//       <OtherComponent />
//     </>
//   );
// }
// const OtherComponent = () => {
//   const { increment, decrement } = useCounter();
//   return (
//     <>
//       <h1>Other</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </>
//   );
// };
//
//
//
//

// Asnyc For Fetching from API
// --------------------------------------------------------------------------------------
// import { create } from "zustand";
//
// interface CounterStore {
//   count: number;
//   increment: () => void;
//   incremeentAsync: () => Promise<void>;
//   decrement: () => void;
// }
//
// export const useCounter = create<CounterStore>((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   incremeentAsync: async () => {
//     const response = await new Promise((resolve) => setTimeout(resolve, 1000));
//     set((state) => ({ count: state.count + 1 }));
//   },
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));
//
//
//

// Access Directly;
// --------------------------------------------------------------------------------------
// const count = useCounter.getState().count;
// useCounter.setState({ count: 100 });
//
//

// Best Practice
// --------------------------------------------------------------------------------------
// 1. Be as specific as you can, do not destructure the state, access directly
//    Component will re-render if you have multiple variables, thus state.count
// 2. Store should only be related to it's store
//
//

// Slices
// --------------------------------------------------------------------------------------
// 1. Define the bear slice
// const createBearSlice = (set) => ({
//   bears: 0,
//   addBear: () => set((state) => ({ bears: state.bears + 1 })),
// });
//
// // 2. Define the fish slice
// const createFishSlice = (set) => ({
//   fishes: 0,
//   addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
// });
//
// // 3. Combine slices into a single store, both slices have the same set functionality
// const useBoundStore = create((set) => ({
//   ...createBearSlice(set),
//   ...createFishSlice(set),
// }));
