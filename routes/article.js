const express = require("express");
const app = express();
const fs = require("fs");
const articles = require("../articles.json");

app.get("/", (req, res) => {
  fs.readFile("./articles.json", (err, data) => {
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

//

app.post("/", (req, res) => {
  const article = { ...req.body };

  fs.readFile("./articles.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const articles = JSON.parse(data.toString());
      articles.push(article);

      fs.writeFile("./articles.json", JSON.stringify(articles), (err) => {
        if (err) {
          console.log(err);
        } else {
          res.json(article);
        }
      });
    }
  });
});

module.exports = app;
