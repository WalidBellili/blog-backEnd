const express = require("express");
const app = express();
const fs = require("fs");
const messages = require("../messages.json");

app.get("/", (req, res) => {
  fs.readFile("./messages.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const rawData = data;
      console.log(rawData);
      const stringifiedData = rawData.toString();
      console.log(stringifiedData);
      const realData = JSON.parse(stringifiedData);
      console.log(realData);

      res.json(realData);
    }
  });
});

module.exports = app;
