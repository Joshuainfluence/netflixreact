import express from 'express'
import { authCheck, login, logout, signup } from '../controllers/auth.controller.js';
import {protectRoute} from '../middleware/protectRoute.js'

const router = express.Router();

router.post("/signup", signup)

router.post('/logout', logout)

router.post('/login', login)

// to check if user is authenticated
router.get('/authCheck', protectRoute, authCheck)

export default router;