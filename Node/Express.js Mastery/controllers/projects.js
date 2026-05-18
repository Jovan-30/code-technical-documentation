import express from "express";

const allProjects = (req, res) => {
  res.send("All Projects")
};

const createProjects = (req, res) => {
  res.send("Create Projects")
};

const updateProjects = (req, res) => {
  res.send("Update Projects")
};

const deleteProjects = (req, res) => {
  res.send("Delete Projects")
};

export { allProjects, createProjects, updateProjects, deleteProjects };