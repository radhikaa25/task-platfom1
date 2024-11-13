import { Router } from 'express';
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from '../controllers/taskController';

const router = Router();

// Route to create a new task
router.post('/create', createTask);

// Route to get all tasks
router.get('/', getTasks);

// Route to get a single task by ID
router.get('/:id', getTaskById);

// Route to update a task
router.put('/:id', updateTask);

// Route to delete a task
router.delete('/:id', deleteTask);

export default router;
