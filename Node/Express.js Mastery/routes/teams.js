import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Teams");
});

router.post("/create", (req, res) => {
  res.send("Create Teams");
});

router.put("/update", (req, res) => {
  res.send("Update Teams");
});

router.delete("/delete", (req, res) => {
  res.send("Delete Teams");
});

export default router;