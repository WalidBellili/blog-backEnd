const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("article route ok");
});

module.exports = app;
