'use strict';

const Task = require("../models/Task");//with ").Task" (on the end) it allows me to import more than one thing
const TaskDao = require("../daos/TaskDao");//with ").TaskDao"...

class TaskController{

    async getAllTasks (req, res) {
        let dao = new TaskDao();
        dao.getAllTasks(function(err, task) {
            if (err)
                res.send(err);

            res.json(task);
        });
    }

    async getTaskById(req, res) {
        let task = new Task(req.params.id);
        
        let dao = new TaskDao();
        dao.getTaskById(task.idTask, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    }
    
    async newTask(req, res) {
        //populate task bean
        let task = new Task(null, req.body.task);

        //handles null error
        if(!task.task){
            res.status(400).send({ error:true, message: 'Provide task info!' });
        }else{
            let dao = new TaskDao();
            dao.newTask(task.task, function(err, result) {
                if (err)
                    res.send(err);

                task.idTask = result.insertId;//populate id returned from sql
                res.json(task);
            });
        }
    }

    async editTask (req, res) {
        //check req integrity
        if(req.params.id !== req.body.idTask){
            res.send(false);
        }else{
            let task = new Task(req.body.idTask, req.body.task);

            let dao = new TaskDao();
            dao.editTask(task.idTask, task.task, function(err, task) {
                if (err)
                    res.send(err);

                res.send(true);
                //res.json(task);
            });
        }
    }

    async deleteTask (req, res) {
        let dao = new TaskDao();
        dao.deleteTask(req.params.id, function(err, result) {
            if (err)
                res.send(err);

            //res.json({ message: 'Task successfully deleted' });
            res.send(true);
        });
    }

    async checkTask (req, res){
        let dao = new TaskDao();
        dao.checkTask(req.params.id, function(err, result) {
            if (err)
                res.send(err);

            //res.json({ message: 'Task successfully checked' });
            res.send(true);
        });
    }

    async uncheckTask (req, res){
        let dao = new TaskDao();
        dao.uncheckTask(req.params.id, function(err, result) {
            if (err)
                res.send(err);

            //res.json({ message: 'Task successfully checked' });
            res.send(true);
        });
    }
}

module.exports = new TaskController();//exports as instance!!!