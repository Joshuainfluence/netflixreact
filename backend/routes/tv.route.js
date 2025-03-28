import express from 'express';
import { getSimilarTv, getTrendingTv, getTvDetails, getTvsByCategory, getTvTrailers } from '../controllers/tv.controller.js';

const router = express.Router();

// getting only one trendng tv show, when we refresh it will update to another one
router.get("/trending", getTrendingTv) ;

router.get("/:id/trailers", getTvTrailers);

router.get("/:id/details", getTvDetails);

router.get("/:id/similar", getSimilarTv );

router.get("/:category", getTvsByCategory );

export default router;