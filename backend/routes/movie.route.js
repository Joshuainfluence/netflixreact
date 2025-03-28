import express from 'express';
import { getMovieDetails, getMovieTrailers, getSimilarMovies, getTrendingMovie } from '../controllers/movie.controller.js';

const router = express.Router();

// getting only one trendng movie, when we refresh it will update to another one
router.get("/trending", getTrendingMovie) ;

router.get("/:id/trailers", getMovieTrailers);

router.get("/:id/details", getMovieDetails);

router.get("/:id/similar", getSimilarMovies )

export default router;  