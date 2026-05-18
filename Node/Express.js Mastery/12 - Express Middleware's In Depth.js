// Middleware - function that passes as middle of request and response cycle,
//              three parameters (req, res, next)
// --------------------------------------------------------------------------------------
// Benefits:
// Modify our response
// Add functionality to server application (authorization, authenticate)
//
// Request
// Middleware
// Response

// Example 1: Check is user is authorized/authenticated before getting response
//
// const userCredentials = (req, res, next) => {
//   console.log('username: ')
//   console.log('email: ')
//   console.log('password: ');
//   next();
// }
// app.get("/products", userCredentials, (req, res) => {
//   res.send('Welcome Admin')
// })

// app.use(middleware) - runs everytime
// --------------------------------------------------------------------------------------s
// const userCredentials = (req, res, next) => {
//   console.log('username: ')
//   console.log('email: ')
//   console.log('password: ');
//   next();
// }
// app.use(userCredentials)
// app.get("/products", (req, res) => {
//   res.send('Welcome Admin')
// })
