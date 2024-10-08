let mongoose = require("mongoose");
require("dotenv").config();

let connectionstring = process.env.mongodbconnect;

const database = () => {
  mongoose
    .connect(connectionstring)
    .then(() => {
      console.log(`conneted to ${connectionstring}`);
    })
    .catch(() => {
      console.log(`error ${connectionstring}`);
    });
};
module.exports = database;
