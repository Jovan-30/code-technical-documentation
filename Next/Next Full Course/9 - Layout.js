// Layout.tsx - reuse the user interface over again and again
// --------------------------------------------------------------------------------------
// Must have one in the root directory
//
// Example: navigation bar on same pages
//
// Headers, footers, navigation
//
//

// Example 1:
// --------------------------------------------------------------------------------------
// import { ReactNode } from "react";
// import Link from "next/link";
// const Layout = ({ children }: { children: ReactNode }) => {
//   return (
//     <div>
//       <ul className="flex gap-5 bg-red-400">
//         <Link href="/login">Login Home</Link>
//         <Link href="/login/login-admin">Admin</Link>
//         <Link href="/login/login-user">User</Link>
//       </ul>
//       {children}
//     </div>
//   );
// };

// export default Layout;
