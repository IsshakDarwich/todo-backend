'use strict';

const express = require("express");

const TaskRoutes = express.Router();

const Task = require("../controllers/TaskController");


TaskRoutes.get("/task", Task.getAll);
TaskRoutes.post("/task", Task.newTask);

TaskRoutes.get("/task/:id", Task.getById);
TaskRoutes.put("/task/:id", Task.edit);
TaskRoutes.delete("/task/:id", Task.delete);

TaskRoutes.put("/task/:id/check", Task.check);
TaskRoutes.put("/task/:id/uncheck", Task.uncheck);

module.exports = TaskRoutes;