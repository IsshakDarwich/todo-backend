'use strict';

const express = require("express");

const task_routes = express.Router();

const TaskController = require("../controllers/TaskController");


task_routes.get("/task", TaskController.getAllTasks);
task_routes.post("/task", TaskController.newTask);

task_routes.get("/task/:id", TaskController.getTaskById);
task_routes.put("/task/:id", TaskController.editTask);
task_routes.delete("/task/:id", TaskController.deleteTask);

task_routes.put("/task/check/:id", TaskController.checkTask);
task_routes.put("/task/uncheck/:id", TaskController.uncheckTask);

module.exports = task_routes;