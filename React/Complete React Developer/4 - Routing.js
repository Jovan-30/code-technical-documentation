// Routing - how to determine what pages to render based on endpoint
// --------------------------------------------------------------------------------------
// React router is the library

// An entire page is a component, but the navigation bar component is still there

// Example 1:
// const Navigation = () => {
//   return (
//     <div>
//       <h1>Navigation Bar</h1>

//       <Outlet />
//     </div>
//   )
// }
// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Navigation />}>
//           <Route index element={<Home /> } />
//           <Route path="shop" element={<Shop /> } />
//         </Route>
//       </Routes>
//     </>
//   )
// };


// Example 2 - Links
// const Navigation = () => {
//   return (
//     <>
//       <div className="navigation">
//         <Link className="logo-container" to="/">
//           <CrownLogo  />
//         </Link>

//         <div className="links-container">
//           <Link className="nav-link" to='/shop'>
//             SHOP
//           </Link>
//         </div>
//       </div>
//       <Outlet />
//     </>
//   )
// };