const Users = require("../models/userModel")
// method: get
// descr: get all users info

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find()

    res.status(200).json({
      message: "success",
      allUsers
    })

  } catch (error) {
    console.log(error);
  }
}

// method: post
// descr: add one user info

const addUser = async (req, res) => {
  try {
    const { title, telnumber, email, password, date } = req.body
    const newUser = await Users.create({
      title,
      telnumber,
      email,
      password,
      date
    })

    res.status(201).json({
      message: "success",
      newUser
    })
  } catch (error) {
    console.log(error);
  }
}

// method: delete
// descr: delete one user
const removeUser = async (req, res) => {
  try {
    await Users.findByIdAndRemove(req.params.id)

    res.status(200).json({
      message: "deleted"
    })

  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllUsers, addUser, removeUser }