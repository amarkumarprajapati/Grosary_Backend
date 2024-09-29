let express = require("express");
const { login } = require("schema_groy");


// add
let adddata = async (req, res) => {
  let { name, classname, select, roll } = req.body;
  let datatoadd = new login({
    name,
    classname,
    select,
    roll,
  });
  let savedata = await datatoadd.save();
  if (!savedata) {
    console.log("error to save");
    const messagedata = {
      message: "error",
      savedata: savedata,
    };
    return res.status(400).json(messagedata);
  }
  res.status(200).json({
    message: "success",
    savedata: savedata,
  });
};

module.exports = {
  adddata,
};
