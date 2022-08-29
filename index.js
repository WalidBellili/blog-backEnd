const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = 5000;
const articlesRoute = require("./routes/article");
const messagesRoute = require("./routes/message");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors("*"));

app.use("/articles", articlesRoute);
app.use("/messages", messagesRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
