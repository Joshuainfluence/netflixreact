// const express = require('express'); common js
import express from 'express'; //esmodule, to be able to use, set type: module in package.json file
import authRoutes from './routes/auth.route.js'

const app = express();
// the reason why the verson (v1) for api, is that at some point api will be updated, but the project will still need the first api
app.use("/api/v1/auth", authRoutes)
// to be able to run this file, under at package.json file, at scripts, add dev: node
app.listen(5000, ()=> {
    console.log("Server is started on https://localhost:5000")
})
