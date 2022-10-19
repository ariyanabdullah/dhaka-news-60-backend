const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const category = require("./data/category.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello Worlhkjha!");
});

app.get("/news-category", (req, res) => {
  res.send(category);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
