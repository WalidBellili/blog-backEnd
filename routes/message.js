const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  console.log("message route ok");
});

module.exports = app;
