import express from 'express';
import bodyParser from 'body-parser';
import projectRoutes from './routes/projectRoutes';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());

// Use the routes
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Example root route
app.get('/', (req, res) => {
  res.send('Hello from Task Platform Backend');
});

export default app;
