const express = require("express");
require("dotenv").config();
let dbconnect = require("./src/helper/db.mongo");
let addtdatanew = require("./src/router/routerdata");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.port;

app.use(bodyParser.json());

// api
app.use("/api", addtdatanew);
app.all("*", function (req, res) {
  var data = {
    success: false,
    message: "Page not found",
  };
  return res.status(404).json(data);
});

app.use((err, req, res) => {
  if (err.name == "UnauthorizedError") {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
});

// Database
dbconnect();

// start server
app.listen(port, () => {
  console.log(`Connected to server ${port}`);
});
