const express = require("express");
const app = express();

//Routes
app.get("/", (req, res) => {
    res.send("hello modafaka");
})
//Server
let port = 2222;
app.listen(port, function () {
    console.log("Server started listening at localhost" + port)
})