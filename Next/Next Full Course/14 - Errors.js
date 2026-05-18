// Errors - handle and display errors during rendering
//          "something went wrong"
// --------------------------------------------------------------------------------------
// Example 1:
//
// const Dashboard = () => {
//   if (2 < 5) {
//     throw new Error("ERROR in Dashboard");
//   }
//   return <div>Dashboard</div>;
// };
// export default Dashboard;
//
//
// "use client";
// const ErrorBoundary = () => {
//   return <div>Something went wrong</div>;
// };
// export default ErrorBoundary;
