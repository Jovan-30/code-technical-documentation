// Server
// --------------------------------------------------------------------------------------
// Every component will automatically be a server component
//
// Issues: Can't provide any interactivity for your component:
// Example: "use state"
// Solution: "use client" // Convert to Client component
//

// --------------------------------------------------------------------------------------
// Server:
// Data Fetching
// Backend
// Priavte/Confidential Info
// Complex Rendering logic
// SEO friendly dynamic content
//
// Client:
// Interactviity
// State Manegement
// Browser APIs
// Hooks
// Client-Side Animations and Effects

// Server Only Code
// --------------------------------------------------------------------------------------
// npm i server-only
//
// import "server-only";
//
// export const add = (a: number, b: number): number => a + b;
// export const subtract = (a: number, b: number): number => a - b;

// Client Only Code
// --------------------------------------------------------------------------------------
// npm i client-only
//
// import "client-only";
//
// export const add = (a: number, b: number): number => a + b;
// export const subtract = (a: number, b: number): number => a - b;
//
//
//

// Top Level Components
// --------------------------------------------------------------------------------------
// Rest of components like Settings, Profile and Password now become client because this Dashboard
// component is a client component with "use client"
//
// Example:
//
// "use client";
// import Settings from "@/components/Settings";
// import Profile from "@/components/Profile";
// import Password from "@/components/Password";
//
// const Dashboard = () => {
//   return (
//     <div>
//       <Settings />
//       <Profile />
//       <Password />
//     </div>
//   );
// };
// export default Dashboard;
//
//

// Client Side Data Fetching
// --------------------------------------------------------------------------------------
// "use client";
//
// import { useState, useEffect } from "react";
// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
// const TodoComponent = () => {
//   const [todo, setTodo] = useState<Todo | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setError(null);
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/todos/1"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setTodo(data);
//       } catch (err) {
//         if (err instanceof Error) {
//           setError(err.message);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);
//
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//
//   if (error) {
//     return <div>Error: {error}</div>;
//   }
//
//   if (todo) {
//     return (
//       <div>
//         <h1>Todo</h1>
//         <p>
//           <strong>ID:</strong> {todo.id}
//         </p>
//         <p>
//           <strong>Title:</strong> {todo.title}
//         </p>
//         <p>
//           <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
//         </p>
//       </div>
//     );
//   }
//   return null;
// };
// export default TodoComponent;
//
//
//

// Server Side Data Fetching
// --------------------------------------------------------------------------------------
// const TodoComponent = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(data);

//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.completed ? "Completed" : "Not Completed"}</p>
//     </div>
//   );
// };
// export default TodoComponent;
//
//
// loading.tsx:
// const Loading = () => {
//   return <div>Loading...</div>;
// };
// export default Loading;
//
//
// error.tsx:
// "use client";
//
// const ErrorBoundary = () => {
//   return (
//     <div>
//       <h1>Oooo Noo Error</h1>
//     </div>
//   );
// };
// export default ErrorBoundary;
