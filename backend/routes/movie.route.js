import express from 'express';
import { getTrendingMovie } from '../controllers/movie.controller.js';

const router = express.Router();

// getting only one trendng movie, when we refresh it will update to another one
router.get("/trending", getTrendingMovie) ;

export default router;  