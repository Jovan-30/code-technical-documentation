// Path Module - utilities for working with file and directory paths
// --------------------------------------------------------------------------------------
// import path from "path";



// basename - Get last portion of path?
// --------------------------------------------------------------------------------------
// console.log(path.basename("/'Complete Node.js Bootcamp'/index.js"));
// Result: index.js
//
// console.log(path.basename("/'Complete Node.js Bootcamp'/index.js", ".js"));
// Result: index




// dirname - Just the directory name
// --------------------------------------------------------------------------------------
// console.log(path.dirname("/'Complete Node.js Bootcamp'/courses/index.js"));
// Result: /'Complete Node.js Bootcamp'/courses



// extname - Get the extension name
// --------------------------------------------------------------------------------------
// console.log(path.extname("/'Complete Node.js Bootcamp'/courses/index.js"));
// Result: .js



// join - Generate Path
// --------------------------------------------------------------------------------------
// console.log(path.join("c:", "courses", "node"));
// Result: c:\courses\node



// join - Go up a directory level
// --------------------------------------------------------------------------------------
// console.log(path.join("c:", "courses", "node", ".."));
// Result: c:\courses



// normalize
// --------------------------------------------------------------------------------------
// console.log(path.normalize("c:\\\\\courses\\redux\\\store\\features\\"));
// Result: c:\courses\redux\store\features\



// parse - object of path name
// --------------------------------------------------------------------------------------
// console.log(path.parse("c:\\nodejs\\courses\\app.js"));
// Result:
// {
//   root: 'c:\\',
//   dir: 'c:\\nodejs\\courses',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }
//
// 
// console.log(path.parse("c:\\nodejs\\courses\\app.js").ext);
// Result: .js
