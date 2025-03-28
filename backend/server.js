// const express = require('express'); common js
import express from 'express'; //esmodule, to be able to use, set type: module in package.json file

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready 3");
})
// to be able to run this file, under at package.json file, at scripts, add dev: node
app.listen(5000, ()=> {
    console.log("Server is started on https://localhost:5000")
})
