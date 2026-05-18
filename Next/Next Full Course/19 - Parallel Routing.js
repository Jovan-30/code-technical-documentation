// Parallel Routing -
// --------------------------------------------------------------------------------------
// Issue: Can't provide loading.tsx and error.tsx for components but can for the pages
// layout.tsx (members components and comments components)
// If error happens to either component can't handle error cause you are not using pages.tsx
//
// Solution: Parallel Routes
//
//

// Example:
// --------------------------------------------------------------------------------------
// members/layout.tsx
//
// members/@teams/page.tsx
// members/@teams/loading.tsx
// members/@teams/error.tsx
//
// members/@comments/page.tsx
// members/@comments/loading.tsx
//
//
//
//
// Example Issue- Error cause we won't have content for comments, thus 404 error
// members/@teams/salaries/page.tsx
//
// Example: Solution - Specify any UI/or no UI
// members/@comments/default.tsx
//
//
// members/layout.tsx: Now we can use loading.tsx and error.tsx for @comments and @team
//
// import { ReactNode } from "react";
// interface LayoutProps {
//   children: ReactNode;
//   team: ReactNode;
//   comments: ReactNode;
// }
// const layout = ({ children, team, comments }: LayoutProps) => {
//   return (
//     <>
//       <section>{children}</section>
//       <section>{team}</section>
//       <section>{comments}</section>
//     </>
//   );
// };
// export default layout;
//
//
//
// members/@team/page.tsx: Getting an error, now only this component will show error not full page
//
// const Teams = () => {
//   if (2 < 5) {
//     throw new Error("Error");
//   }
//   return <div className="border-green-700 border-2 p-4 ">Teams</div>;
// };
// export default Teams;
//
//
//
//
// members/@team/error.tsx:
//
// "use client";
// const Error = () => {
//   return <div>Team is getting an error</div>;
// };
//
// export default Error;
//
//
//
//
//
// members/@comments/page.tsx
//
// const Comments = async () => {
//   await new Promise((resolve) =>
//     setTimeout(() => {
//       resolve("Loading..");
//     }, 4000),
//   );
//   return <div className="border-amber-500 border-2 p-4">Comments</div>;
// };
// export default Comments;
//
//
// members/@comments/loading.tsx: like error only loads for comments component not full page
//
// const Loading = () => {
//   return <div>Loading...</div>;
// };
// export default Loading;
//
//
//
//
// members/@team/salaries/page.tsx: 404 Page Not Found, need default.tsx for @comments and /members
// http://localhost:3000/members/salaries
//
// const Salaries = () => {
//   return (
//     <div>Salaries</div>
//   )
// }
//
// export default Salaries
//
// @comments:
// const Default = () => {
//   return null;
// };
// export default Default;
//
// /members:
// const Default = () => {
//   return <div>Default for members</div>;
// };
//
// export default Default;
