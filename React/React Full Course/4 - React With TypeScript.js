// Component Props Typing
// --------------------------------------------------------------------------------------
// Example 1 - Passing Types
//
// const User = (props: { name: string, location: number, isTrue: boolean}) => {
//   return (
//     <div>
//       <p>{props.name}</p>
//       <p>{props.location}</p>
//       <p>{props.isTrue}</p>
//     </div>
//   )
// };
// export default User;


// Example 2 - Destructuring
//
// const User = ({ name, location, isTrue }: { name: string, location: number, isTrue: boolean}) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{location}</p>
//       <p>{isTrue}</p>
//     </div>
//   )
// };
// export default User;


// Example 3 - Type/Interface
//
// type UserShape = {
//   name: string,
//   location: number,
//   isTrue: boolean
// }
// interface UserShape {
//   name: string,
//   location: number,
//   isTrue: boolean
// }
// const User = ({ name, location, isTrue }: UserShape) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{location}</p>
//       <p>{isTrue}</p>
//     </div>
//   )
// };
// export default User;


// Example 4
// import type { ReactNode } from "react";
//
// interface UserShape {
//   children: ReactNode
// }
// const User = ({ children }: UserShape) => {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// };
// export default User;


// Example 5 - Alternative
// import type { FC } from "react";
//
// interface UserShape {
//   name: string,
//   location: number,
//   isTrue: boolean
// }
//
// const User: FC<UserShape> = ({ name, location, isTrue }) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{location}</p>
//       <p>{isTrue}</p>
//     </div>
//   )
// };
// export default User;


// Example 6 - Button
//
// interface ButtonShape {
//   label: string,
//   onClick?: () => void;
//   disabled: boolean
// }
// const Button = ({label, onClick, disabled}: ButtonShape) => {
//   return (
//     <button onClick={onClick} disabled={disabled}>
//       {label}
//     </button>
    
//   )
// };
// export default Button;
//
//
// import Button from "./components/Button";
// const App = () => {
//   const onClickHandler = () => {
//     alert("Hello");
//   }
//   return (
//     <div>
//       <Button label="Click Me" onClick={onClickHandler} disabled={false} />
//       <Button label="Click Me" disabled={true} />
//     </div>
//   )
// };
// export default App;



// Reusable Types/Interfaces
// --------------------------------------------------------------------------------------
// Example 1:
// type UserInfoShape = {
//   id: number,
//   name: string,
//   email: string
// }
// type AdminInfoShape = UserInfoShape & {
//   role: string,
//   lastLogin: string
// }
// interface UserInfoShape {
//   id: string,
//   name: string,
//   email: string
// }
// interface AdminInfoShape extends UserInfoShape {
//   role: string,
//   lastLogin: Date
// }
// export { type UserInfoShape, type AdminInfoShape };
//
//
//
// import { type AdminInfoShape } from "../types";
// type AdminInfoProps = {
//   admin: AdminInfoShape
// }
// const AdminInfo = ({ admin }: AdminInfoProps) => {
//   const { id, name, email, role, lastLogin } = admin;
//   return (
//     <div style={{ border: "1px red solid", marginTop: "10px"}}>
//       <p>User</p>
//       <p>ID: {id}</p>
//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//       <p>Role: {role}</p>
//       <p>Last Login: {lastLogin}</p>
//     </div>
//   );
// };
// export default AdminInfo;
//
//
//
// import { type UserInfoShape } from "../types";
// type UserInfoProps = {
//   user: UserInfoShape;
// }
// const UserInfo = ({ user }: UserInfoProps) => {
//   const { id, name, email } = user;
//
//   return (
//     <div style={{ border: "1px black solid",  marginTop: "10px"}}>
//       <p>User</p>
//       <p>ID: {id}</p>
//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//     </div>
//   );
// };
// export default UserInfo;
//
//
//
// import UserInfo from "./components/UserInfo";
// import AdminInfo from "./components/AdminInfo";
// import { type UserInfoShape, type AdminInfoShape } from "./types";
// const App = () => {
//   const user: UserInfoShape = {
//     id: 100,
//     name: 'John',
//     email: 'John Email'
//   }
//   const admin: AdminInfoShape = {
//     id: 100,
//     name: 'John',
//     email: 'John Admin Email',
//     role: 'admin',
//     lastLogin: 'last login'
//   }
//   return (
//     <div>
//       <UserInfo user={user} />
//       <AdminInfo admin={admin} />
//     </div>
//   )
// };
// export default App;



// useState
// --------------------------------------------------------------------------------------
// Generic function thus provide type

// Example 1:
// const [count, setCount] = useState<number>(0)

// Example 2:
// interface UserProfile {
//   name: string,
//   email: string,
//   id: number
// }
// const [profile, setProfile] = useState<UserProfile>({
//   name: '',
//   email: '',
//   id: 0
// })

// Example 3:
// interface Todo {
//   id: number
//   task: string,
//   completed: boolean
// }
// const [todo, setTodo] = useState<Todo[]>([])
