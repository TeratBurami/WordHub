require("dotenv").config();
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, function () {
    console.log(`Listening on port ${process.env.PORT}`);
  });
  