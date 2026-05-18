// Route Params - name URL segments used to capture the value specified at position
// --------------------------------------------------------------------------------------
// Example: /projects/:id
//
// Example 1:
//
// app.delete("/projects/delete/:id", (req, res) => {
//   res.send(req.params.id)
// });
//
//
//
// Example 2:
//
// app.delete("/projects/delete/:id/:category", (req, res) => {
//   const { id, category } = req.params
//   res.send(`${id} ${category}`);
// });
//
//
//



// app.param - to check the existence of the data related to route param
// --------------------------------------------------------------------------------------
// app.param("id", (req, res, next, id) => {
//   console.log(`id: ${id}`)
//   next();
// })
// 
// app.get('/user/:id', (req, res) => {
//   console.log('this is user id path');
//   res.send("Response OK");
// })