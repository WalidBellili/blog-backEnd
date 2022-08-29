const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  console.log("article route ok");
});

module.exports = app;
