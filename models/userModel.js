const mongoose = require("mongoose")

const UsersModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  telnumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
})

module.exports = mongoose.model("Users", UsersModel)