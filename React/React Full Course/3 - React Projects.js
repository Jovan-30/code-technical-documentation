// Tasks Project
// --------------------------------------------------------------------------------------
// import { useState } from "react";
// 
// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState('');
//   const [updateInput, setUpdateInput] = useState('');

//   const handleSubmit = () => {
//     const newTasks = [...tasks, {
//       text: input,
//       id: Math.floor(Math.random() * 100)
//     }]
//     setTasks(newTasks);
//   }
//   const removeTask = id => {
//     setTasks(tasks => tasks.filter(t => t.id !== id));
//   }
//   const updateTask = id => {
//     const updatedTasks = tasks.map((task) => {
//       if (id === task.id) {
//         return {...task, text: updateInput }
//       }
//       return task;
//     })
//     setTasks(updatedTasks);
//   }
// 
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="New Task"
//         value={input}
//         onChange={e => setInput(e.target.value)} />
//       <button onClick={handleSubmit}>Submit</button>
//       <hr />
// 
//       {
//         tasks.map(({ text, id }) => {
//           return (
//             <div key={`${text}-${id}`}>
//               <p>{id}</p>
//               <p>{text}</p>
//               <button onClick={() => removeTask(id)}>Remove Task</button>
//               <br />
//               <br />
// 
//               <input 
//                 type="text"
//                 placeholder="Update Task"
//                 value={updateInput}
//                 onChange={e => setUpdateInput(e.target.value)}
//               />
//               <p>{updateInput}</p>
//               <button onClick={() => updateTask(id)}>Update Task</button>
//               <hr />
//             </div>
//           )
//         })
//       }
//     </>
//   )
// };
// export default App;