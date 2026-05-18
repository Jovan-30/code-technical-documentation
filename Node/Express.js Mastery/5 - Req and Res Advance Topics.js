// Next - jump from one callback function to the other
// --------------------------------------------------------------------------------------
// import express from "express";
//
// const app = express();
// const PORT = 8000;
//
//
// Not allowed to provide response two times.
// Next jump from one callback function to the other
// app.get('/double-cb', (req, res, next) => {
//   // res.send("Single Callback");
//   console.log("First Callback");
//   next();
// }, (req, res) => {
//   res.send("Double Callback")
// })
//
// app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));




// Arrays of callback functions?
// --------------------------------------------------------------------------------------
// import express from "express";
//
// const app = express();
// const PORT = 8000;
//
// const callback1 = (req, res, next) => {
//   console.log("First Callback");
//   next();
// }
// const callback2 = (req, res, next) => {
//   console.log("Second Callback");
//   next();
// }
// const callback3 = (req, res) => {
//   console.log("Third Callback");
//   res.send("Array of callbacks")
// }
// app.get("/array-cb", [callback1, callback2, callback3]);
// app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));


// Example 1:
// 
// import express from "express";
// 
// const app = express();
// const PORT = 8000;
// 
// const cb1 = (req, res, next) => {
//   console.log("First Callback")
//   next();
// }
// const cb2 = (req, res, next) => {
//   console.log("Second Callback")
//   next();
// }
// app.get("/array-cb", [cb1, cb2], (req, res, next) => {
//   console.log("Third callback");
//   next();
// }, (req, res, next) => {
//   console.log("Fourth Callback");
//   res.send('Callback Return');
// })
// app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
