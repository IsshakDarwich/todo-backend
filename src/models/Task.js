'use strict';

module.exports = class Task{//exports as objects
    constructor(idTask, task){
        this.idTask = idTask;
        this.task = task;
        this.status = null;
        this.created_at = new Date();
    }

    /*...no need for getters and setters, JS property*/
}