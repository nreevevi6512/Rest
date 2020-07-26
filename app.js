const express = require("express");
const app = express();

//Routes
app.get("/", (req, res) => {
    res.send("hello modafaka");
})
//Server
app.listen(2222);