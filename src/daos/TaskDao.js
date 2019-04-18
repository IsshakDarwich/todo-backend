'use strict';

const pool = require("../models/DBconnection");

module.exports = class TaskDao{//export as object

    async getAllTasks(callback){//take care on async usage...
        try{
           await pool.query("Select * FROM task", async function (err, res) {
                if(err)
                    callback(err, null);
                else
                    callback(null, res);
            });  
        }catch(err){
            throw new Error(err);
        }
    }

    async getTaskById(idTask, callback) {
        try{  
            await pool.query("SELECT * FROM task WHERE idTask = ? ", [idTask], function (err, res) {             
                if(err)
                    callback(err, null);
                else
                    callback(null, res);
            });
        } catch (error) {
            throw new Error(err);
        }
    }

    async newTask(task, callback){
        try {
            await pool.query("INSERT INTO task SET task = ?", task, function (err, res) {
                if(err)
                    callback(err, null);
                else
                    callback(null, res);
            });
        } catch (error) {
            throw new Error(err);
        }
    }

    async editTask(idTask, task, callback){
        try{
            await pool.query("UPDATE task SET task = ? WHERE idTask = ?", [task, idTask], function (err, res) {
                if(err)
                    callback(err, null);
                else
                    callback(null, res);
            });
        } catch (error) {
            throw new Error(err);
        }
    }

    async deleteTask(idTask, callback){
        try{
            await pool.query("DELETE FROM task WHERE idTask = ?", [idTask], function (err, res) {
                if(err)
                    callback(err, null);
                else
                    callback(null, res);
            });
        } catch (error) {
            throw new Error(err);
        }
    }

    async checkTask(idTask, callback){
        try{
            await pool.query("UPDATE task SET status = ? WHERE idTask = ?", [1,idTask], function (err, res) {
                if(err) 
                    callback(err, null);
                else
                    callback(null,res);
            });
        } catch (error) {
            throw new Error(err);
        }
    }

    async uncheckTask(idTask, callback){
        try{
            await pool.query("UPDATE task SET status = ? WHERE idTask = ?", [0,idTask], function (err, res) {
                if(err)
                    callback(err, null);
                else
                    callback(null, res);
            });
        } catch (error) {
            throw new Error(err);
        }
    }
}