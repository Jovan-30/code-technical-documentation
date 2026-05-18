// HTTP Module - create HTTP server and make requests
// --------------------------------------------------------------------------------------
// Now we use express to create servers
import http from "http"


// Creating a server
// --------------------------------------------------------------------------------------
// Example:
//
const server = http.createServer((req, res) => {
  // console.log(req);
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 404;
  // res.statusMessage = "Error";
  // res.write("<h1>Hello from Server</h1>")
  res.writeHead(202, "Good", { "Context-Type": "text/html" });
  res.write("<h1>Hello from Server</h1>")
});
const PORT = 8000;
server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));



