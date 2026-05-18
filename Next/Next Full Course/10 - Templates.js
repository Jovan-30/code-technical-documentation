// Templates - user moves between pages that use same template, it resets everything and
//             starts fresh
// --------------------------------------------------------------------------------------
// A layout with an input, if I add text to input it stays the same for all pages layout,
//
// Layout does not remount shared components resulting in perforamnce
//
//
// Example:
// "use client";
// import { useState, ReactNode } from "react";
//
// const Template = ({ children }: { children: ReactNode }) => {
//   const [input, setInput] = useState("");
//
//   return (
//     <div>
//       <input value={input} onChange={(e) => setInput(e.target.value)} />
//       {children}
//     </div>
//   );
// };
// export default Template;
