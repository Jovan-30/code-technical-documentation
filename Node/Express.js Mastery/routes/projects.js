import express from "express";
import { allProjects, createProjects, updateProjects, deleteProjects } from "../controllers/projects.js"

const router = express.Router();

router.get("/all", allProjects);
router.post("/create", createProjects);
router.put("/update", updateProjects);
router.delete("/delete", deleteProjects);

export default router;