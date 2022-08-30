const express = require("express");
const app = express();
const fs = require("fs");
// const { body, validationResult } = require("express-validator");
// const { checkIfMessageExists } = require("../middlewares/category");
const slugify = require("slugify");
const moment = require("moment");

app.get("/", (req, res) => {
  fs.readFile("./category.json", (err, data) => {
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
  const category = {
    ...req.body,
    slug: slugify(req.body.name, { lower: true }),
  };

  fs.readFile("./category.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const categories = JSON.parse(data.toString());
      categories.push(category);

      fs.writeFile("./category.json", JSON.stringify(categories), (err) => {
        if (err) {
          console.log(err);
        } else {
          res.json(category);
        }
      });
    }
  });
});

module.exports = app;
