// File System Module - modules enables interacting with the file system
// --------------------------------------------------------------------------------------
// import fs from "fs";



// Three Categories
// --------------------------------------------------------------------------------------
// Promise example
// Callback example
// Synchronous example



// Promies API 
// --------------------------------------------------------------------------------------



// Creating Directory
// --------------------------------------------------------------------------------------
// Example 1:
//
// try {
//   await fs.mkdir('c:\\nodejs');
//   console.log("Folder Created...")
// } catch (error) {
//   console.log(error);
// }
//
//
// Example 2:
//
// try {
//   await fs.mkdir('c:\\nodejs\\redux\\toolkit', { recusrive: true });
//   console.log("Folder Created...")
// } catch (error) {
//   console.log(error);
// }





// Read Directory
// --------------------------------------------------------------------------------------
// try {
//   const files = await fs.readdir("c:\\nodesjs");
//   for (const file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }
// Result:
// Hello.txt
// Hello.js
// Hello.ts





// Remove Directory
// --------------------------------------------------------------------------------------
// Directory must be empty
//
// Example:
// try {
//   await fs.rmdir("c:\\nodejs\\courses")
// } catch (error) {
//   console.log(error);
// }




// Create and Write
// --------------------------------------------------------------------------------------
// import fs from "fs"
// try {
//   fs.writeFile("README.md", "Hello Node");
// } catch (error) {
//   console.log(error);
// }
