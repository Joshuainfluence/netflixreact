// const express = require('express'); common js
import express from 'express'; //esmodule, to be able to use, set type: module in package.json file
import authRoutes from './routes/auth.route.js'
import movieRoutes from './routes/movie.route.js'
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";


import dotenv from 'dotenv'
import { ENV_VARS } from './config/enVars.js';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
import { protectRoute } from './middleware/protectRoute.js';

dotenv.config();


const app = express();
const PORT = ENV_VARS.PORT


app.use(express.json()) //will allow us to parse req.body
app.use(cookieParser());

// the reason why the verson (v1) for api, is that at some point api will be updated, but the project will still need the first api
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/movie", protectRoute, movieRoutes)
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);





// to be able to run this file, under at package.json file, at scripts, add dev: node
app.listen(PORT, () => {
    console.log("Server is started on https://localhost:" + PORT)
    connectDB();
})

