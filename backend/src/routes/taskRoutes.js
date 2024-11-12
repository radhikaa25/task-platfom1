const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create Task
router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Apply for Task (User applies)
router.post('/:id/apply', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        task.appliedUsers.push(req.body.userId);
        await task.save();
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;