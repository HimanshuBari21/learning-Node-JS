const express = require("express");
const site = express();
const fs = require('fs');

const port = 3000;

const indexFile = fs.readFileSync('index.html',"utf-8");
const Himanshu = fs.readFileSync("himanshu.html","utf-8");

site.get("/",(req, res) => {
    res.send(indexFile)
})

site.get("/himanshu.html",(req, res) => {
    res.send(Himanshu)
})

site.listen(port, () => {
    console.log("Server is running on localhost: " + port);
})