const Task = require('../models/Task');

const getAllTasks = (req, res)=>{
    res.send('All tasks');
}

const createTask = (req, res)=>{
    res.send('create task');
}

const getTask = (req, res)=>{
    res.send('get a task');
}

const deleteTask = (req, res)=>{
    res.send('delete a task');
}

const updateTask = (req, res)=>{
    res.send('update a task');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}