// Design Patterns - organize components and logic for consistency
// --------------------------------------------------------------------------------------

// Layout - oragnizing components that manage the layout structure of project
// --------------------------------------------------------------------------------------
// <section>
// code
// <section/>
//

// Container - loading and managing data (pass data to container)
// --------------------------------------------------------------------------------------
// Container Component
// Code
// Code
// Container Component
//
//

// Controlled   - form element whose value is controlled by React state, handles component and update
//                based on user input through event handles (onChange)
// Uncontrolled - maintains internal state, React does not directly manage or track value
// --------------------------------------------------------------------------------------
// Uncontrolled:
// const nameInput = useRef<HTMLInputElement>(null);
// const ageInput = useRef<HTMLInputElement>(null);
// const hairColorInput = useRef<HTMLInputElement>(null);

// const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
//   e.preventDefault();
//   if (nameInput.current && ageInput.current && hairColorInput.current) {
//     console.log(nameInput.current.value);
//     console.log(ageInput.current.value);
//     console.log(hairColorInput.current.value);
//   }
// };
//
//
// Controlled:
// const [name, setName] = useState("");
// const [age, setAge] = useState<number | string>("");
// const [hairColor, setHairColor] = useState("");
// const [nameInputError, setNameInputError] = useState("");
// useEffect(() => {
//   if (name.length < 2) {
//     setNameInputError("Name must be at least 2 characters or long");
//   } else {
//     setNameInputError("");
//   }
// }, [name]);
//
//
//

// High Order Components - function that takes the original component and returns the new
//                         enhanced component
// --------------------------------------------------------------------------------------
// const EnhancedComponent = higherOrderComponent(OriginalComponent);
//
//

// Factory - create different variations based on input props
// --------------------------------------------------------------------------------------
// import React from 'react';

// // 1. Define the possible button types
// type ButtonType = 'primary' | 'secondary' | 'danger';

// // 2. Define the Props for our Button
// interface ButtonProps {
//   type: ButtonType;
//   label: string;
//   onClick: () => void;
// }
// // 3. The Factory Component that decides which button to render
// const ButtonFactory: React.FC<ButtonProps> = ({ type, label, onClick }) => {
//   const getButtonStyle = (type: ButtonType): React.CSSProperties => {
//     switch (type) {
//       case 'primary':
//         return { backgroundColor: 'blue', color: 'white', padding: '10px' };
//       case 'secondary':
//         return { backgroundColor: 'gray', color: 'black', padding: '10px' };
//       case 'danger':
//         return { backgroundColor: 'red', color: 'white', padding: '10px' };
//       default:
//         return { backgroundColor: 'white', color: 'black' };
//     }
//   };
//   return (
//     <button style={getButtonStyle(type)} onClick={onClick}>
//       {label}
//     </button>
//   );
// };
// // 4. Usage in App
// const App = () => {
//   return (
//     <div>
//       <ButtonFactory type="primary" label="Save" onClick={() => console.log('Saved')} />
//       <ButtonFactory type="danger" label="Delete" onClick={() => console.log('Deleted')} />
//       <ButtonFactory type="secondary" label="Cancel" onClick={() => console.log('Cancelled')} />
//     </div>
//   );
// };
// export default App;
//
//

// Compound Components
// --------------------------------------------------------------------------------------

// Slots
// --------------------------------------------------------------------------------------

// Render
// --------------------------------------------------------------------------------------
