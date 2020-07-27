const express = require("express");
const app = express();
const mongoose = require("moongoose");

//Routes
app.get("/", (req, res) => {
    res.send("hello modafaka");
})

app.get("/about", (req, res) => {
    res.send("Stupid fucker");
})
//connect to DB

//Server
let port = 22422;
app.listen(port, function () {
    console.log("Server started listening at localhost:" + port)
})