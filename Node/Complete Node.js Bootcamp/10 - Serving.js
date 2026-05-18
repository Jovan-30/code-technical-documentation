// Serving
// --------------------------------------------------------------------------------------
// import http from "http"
// import fs from "fs";

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, "OK", { "content-type": "text/html" });
//     fs.readFile("./home.html", (error, data) => {
//       if (error) throw error;
//       res.end(data);
//     })
//   } 
// });

// const PORT = 8000;
// server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));