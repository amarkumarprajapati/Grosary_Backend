const mongoose = require("mongoose");

let loginschama = mongoose.Schema({
  phone: {
    type: Number,
    required: false,
  },
  otp: {
    type: Number,
    required: false,
  },
});

const login = mongoose.model('login',loginschama)

module.exports = login