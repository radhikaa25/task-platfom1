import { Router } from 'express';
import { signUp, login, logout } from '../controllers/authController';

const router = Router();

// Route to register a new user
router.post('/signup', signUp);

// Route for user login
router.post('/login', login);

// Route for user logout
router.post('/logout', logout);

export default router;
