import express from "express";
import { Task } from "../models/task.model.js";

export const taskRouter = express.Router();

taskRouter.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

taskRouter.post("/task", async (req, res) => {
  const {
    ticket,
    type,
    description,
    done,
    enviroment,
    dev,
    jira,
    sprint,
    jira_state,
    app,
  } = req.body;
  const foundTask = await Task.findOne({ ticket });
  if (foundTask) {
    return res.send("task is already exist");
  }
  const newTask = new Task({
    ticket,
    type,
    description,
    done,
    enviroment,
    dev,
    jira,
    sprint,
    jira_state,
    app,
  });
  await newTask.save();
  res.send("task created successfully");
});

taskRouter.delete("/task/:id", async (req, res) => {
  await Task.deleteOne({ _id: req.params.id });
  res.send("Task deleted successfully");
});

taskRouter.put("/task/:id", async (req, res) => {
  const editedTask = await Task.updateOne(
    { _id: req.params.id },
    { ...req.body }
  );
  res.send("task updated successfully");
});
