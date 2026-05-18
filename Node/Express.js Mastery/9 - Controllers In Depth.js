// Controllers - manages how your application respond to HTTP requests, middle layer
//               between the routes and actual business logic/database operations
// --------------------------------------------------------------------------------------
// import express from "express";
//
// const allProjects = (req, res) => {
//   res.send("All Projects")
// };
// const createProjects = (req, res) => {
//   res.send("Create Projects")
// };
// const updateProjects = (req, res) => {
//   res.send("Update Projects")
// };
// const deleteProjects = (req, res) => {
//   res.send("Delete Projects")
// };
//
// export { allProjects, createProjects, updateProjects, deleteProjects };
//
//
//
// 
// import express from "express";
// import { allProjects, createProjects, updateProjects, deleteProjects } from "../controllers/projects.js"
// 
// const router = express.Router();
// 
// router.get("/all", allProjects);
// router.post("/create", createProjects);
// router.put("/update", updateProjects);
// router.delete("/delete", deleteProjects);
// 
// export default router;