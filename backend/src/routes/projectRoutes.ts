import { Router } from 'express';
import { createProject, getProjects, getProjectById, updateProject, deleteProject } from '../controllers/projectController';

const router = Router();

// Route to create a new project
router.post('/create', createProject);

// Route to get all projects
router.get('/', getProjects);

// Route to get a single project by ID
router.get('/:id', getProjectById);

// Route to update a project
router.put('/:id', updateProject);

// Route to delete a project
router.delete('/:id', deleteProject);

export default router;
