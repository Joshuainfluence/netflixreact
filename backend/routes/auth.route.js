import express from 'express'
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.get("/signup", signup)

router.get('/logout', logout)

router.get('/login', login)
export default router;