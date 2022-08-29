const express = require("express");
const app = express();
const fs = require("fs");


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

//

app.post("/", (req, res) => {
  const message = { ...req.body };

  fs.readFile("./messages.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const messages = JSON.parse(data.toString());
      messages.push(message);

      fs.writeFile("./messages.json", JSON.stringify(messages), (err) => {
        if (err) {
          console.log(err);
        } else {
          res.json(message);
        }
      });
    }
  });
});

module.exports = app;
