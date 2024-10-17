import express from 'express';
import postsRoutes from './routes/post.route';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas para los Posts
app.use('/api/posts', postsRoutes);

export default app;
