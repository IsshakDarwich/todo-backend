'use strict';

const pool = require("../models/DBconnection");

module.exports = class TaskDao
{//export as object

    async getAll(callback)
    {//take care on async usage...
        try{
            await pool.query(
                "Select * FROM task",
                async function (err, res) {

                if(err)
                    callback(err, null);
                else
                    callback(null, res);
            });
        }catch(err){
            throw new Error(err);
        }
    }

    async getById(id, callback)
    {
        try{  
            await pool.query(
                "SELECT * FROM task WHERE idTask = ? ",
                [id],
                function (err, res) {

                if(err)
                    callback(err, null);
                else
                    callback(null, res);
            });
        } catch (error) {
            throw new Error(err);
        }
    }

    async newTask(task, callback)
    {
        try{
            await pool.query(
                "INSERT INTO task SET task = ?",
                task,
                function (err, res) {

                if(err)
                    callback(err, null);
                else
                    callback(null, res);
            });
        } catch (error) {
            throw new Error(err);
        }
    }

    async edit(id, task, callback)
    {
        try{
            await pool.query(
                "UPDATE task SET task = ? WHERE idTask = ?",
                [task, id],
                function (err, res) {

                if(err)
                    callback(err, null);
                else
                    callback(null, res);
            });
        } catch (error) {
            throw new Error(err);
        }
    }

    async delete(id, callback)
    {
        try{
            await pool.query(
                "DELETE FROM task WHERE idTask = ?",
                [id],
                function (err, res) {
                
                if(err)
                    callback(err, null);
                else
                    callback(null, res);
            });
        } catch (error) {
            throw new Error(err);
        }
    }

    async check(id, callback)
    {
        try{
            await pool.query(
                "UPDATE task SET status = ? WHERE idTask = ?",
                [1,id],
                function (err, res) {

                if(err) 
                    callback(err, null);
                else
                    callback(null,res);
            });
        } catch (error) {
            throw new Error(err);
        }
    }

    async uncheck(id, callback)
    {
        try{
            await pool.query(
                "UPDATE task SET status = ? WHERE idTask = ?",
                [0,id],
                function (err, res) {
                    
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