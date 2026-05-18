// Storybook - an open source for testing UI components in isolations
// --------------------------------------------------------------------------------------
// Create UI components outside of the main
//
// Component Isolation
// Visual Testing
// Documentation
// Add on Ecosystem (accessibility checks)
// Design System
// Documentation
//
// npm run storybook

// stories/Button.tsx
// --------------------------------------------------------------------------------------
// const Button = () => {
//   return <div>Button</div>;
// };
// export default Button;
//
//

// stories/Button.stories.tsx
// --------------------------------------------------------------------------------------
// import Button from "./Button";
//
// export default {
//   title: "Button",
//   component: Button,
// };
// export const Primary = () => <Button variant="primary">Primary</Button>;
// export const Secondary = () => <Button variant="secondary">Secondary</Button>;
// export const Main = () => <Button variant="main">Main</Button>;
//
//

// Renaming Story
// --------------------------------------------------------------------------------------
// Primary.storyName = "Blue Button";
// Secondary.storyName = "Green Button";
// Main.storyName = "Red Button";
//
//

// Example:
// --------------------------------------------------------------------------------------
// import MyInput from "../components/MyInput";
// export default {
//   title: "My Input",
//   component: MyInput,
// };
// export const SmallInput = () => (
//   <MyInput size="10rem" placeholder="Enter your name" />
// );
// export const MediumInput = () => (
//   <MyInput size="20rem" placeholder="Enter your name" />
// );
// export const LargeInput = () => (
//   <MyInput size="40rem" placeholder="Enter your name" />
// );
//
//

// Combine Stories
// --------------------------------------------------------------------------------------
// import { LargeInput } from "./MyInput.stories";
// import { Primary } from "./Button.stories";
//
// export default {
//   title: "Combo/Input and button",
// };
// export const Combo = () => {
//   return (
//     <>
//       <LargeInput placeholder="Enter whatever" />
//       <Primary />
//     </>
//   );
// };

// Complex
// --------------------------------------------------------------------------------------
// interface ButtonProps {
//   label: string;
//   onClick: () => void;
//   primary?: boolean;
//   disabled?: boolean;
//   loading?: boolean;
//   size?: "small" | "medium" | "large";
//   color?: string;
//   fullWidth?: boolean;
//   icon?: React.ReactNode;
//   iconPosition?: "left" | "right";
//   ariaLabel?: string;
// }
// const Button = ({
//   label,
//   onClick,
//   primary = false,
//   loading = false,
//   size = "medium",
//   color,
//   fullWidth = false,
//   icon,
//   iconPosition,
//   ariaLabel,
// }: ButtonProps) => {
//   // Conditional classes based on props
//   const buttonClass = `
//     button
//     ${primary ? "button--primary" : "button--secondary"}
//     ${size ? `button--${size}` : "button--medium"}
//     ${color ? `button--custom-color` : ""}
//     ${fullWidth ? "button--fullwidth" : ""}
//     ${loading ? "button--loading" : ""}
//   `;

//   return (
//     <button
//       className={buttonClass}
//       onClick={onClick}
//       aria-label={ariaLabel}
//       style={color ? { backgroundColor: color, color: "white" } : {}}
//     >
//       {loading && <span className="button__loading-spinner">Loading...</span>}
//       {icon && iconPosition === "left" && (
//         <span className="button__icon">{icon}</span>
//       )}
//       <span className="button__label">{label}</span>
//       {icon && iconPosition === "right" && (
//         <span className="button__icon">{icon}</span>
//       )}
//     </button>
//   );
// };
// export default Button;
//
//
//
// export default {
//   title: "Buttons",
//   component: Button,
// };
// export const Primary = {
//   args: {
//     primary: true,
//     label: "Primary Button",
//     onClick: () => alert("You clicked the Primary button"),
//     loading: false,
//     size: "medium",
//     color: "#007bff",
//     fullWidth: false,
//     icon: <FaHome />,
//     iconPosition: "left",
//     ariaLabel: "primary-button",
//   },
// };
//
//
//

// Arg Types
// --------------------------------------------------------------------------------------
// export default {
//   title: "Example/Button",
//   component: Button,
//   argTypes: {
//     // Color picker for backgroundColor
//     backgroundColor: { control: "color" },
//
//     // Dropdown to select button size
//     size: {
//       control: "select",
//       options: ["small", "medium", "large"],
//     },
//
//     // Control the label text of the button (can be typed in Storybook UI)
//     label: {
//       control: "text",
//       description: "Text displayed on the button",
//     },
//
//     // Control the border radius to make the button rounded
//     borderRadius: {
//       control: "number",
//       min: 0,
//       max: 50,
//       step: 1,
//       description: "Control the border radius to make button corners rounded",
//     },
//
//     // Control font size of the button text
//     fontSize: {
//       control: "text",
//       description: "Font size for the button text (e.g., '16px', '1rem')",
//     },
//
//     // Control the button's text color
//     textColor: {
//       control: "color",
//       description: "Color of the button's text",
//     },
//   },
// };
//
//
//

// Decorators
// --------------------------------------------------------------------------------------
// export default {
//   title: "Button",
//   component: Button,
//   // Component Only Decorator
//   decorators: [
//     (Story: any) => (
//       <div
//         style={{
//           padding: "20px",
//           backgroundColor: "#f0f0f0",
//           borderRadius: "8px",
//         }}
//       >
//         <Story />
//       </div>
//     ),
//   ],
// };
//
//

// TypeScript
// --------------------------------------------------------------------------------------
// const meta: Meta<ButtonProps> = {
//   title: "Components/Button",
//   component: Button,
//   argTypes: {
//     color: { control: "color" },
//     label: { control: "text" },
//     disabled: { control: "boolean" },
//   },
// };
// export default meta;

// export const Default: StoryObj<ButtonProps> = {
//   args: {
//     label: "Click Me",
//     color: "#007bff",
//     disabled: false,
//   },
// };
// export const Disabled: StoryObj<ButtonProps> = {
//   args: {
//     label: "Disabled Button",
//     color: "#888",
//     disabled: true,
//   },
// };
// export const Red: StoryObj<ButtonProps> = {
//   args: {
//     label: "Red Button",
//     color: "#ff0000",
//     disabled: false,
//   },
// };

// Add Ons - extensions with story books
// --------------------------------------------------------------------------------------
// const meta: Meta<typeof Button> = {
//   title: "Components/Button",
//   component: Button,
//   tags: ["autodocs"],
//   argTypes: {
//     onClick: { action: "clicked" },
//   },
// };
