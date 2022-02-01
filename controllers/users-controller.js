const User = require("../models/User");
const asyncWrapper = require("../middlewares/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");
require("dotenv").config();

const getAllUsers = asyncWrapper(async (req, res) => {
  // const allUsers = await User.find({}, { password: 0 });
  const allUsers = await User.find({});
  if (!allUsers) {
    return next(createCustomError("There is no users", 404));
  }
  res.status(200).json(allUsers);
});
const addNewUser = asyncWrapper(async (req, res) => {
  console.log(req.body);

  const user = await User.create(req.body);
  res.status(201).json({ user });
});
const addMultipleUsers = asyncWrapper(async (req, res) => {
  const users = req.body;
  for (let user of users) {
    await User.create(user);
  }
  res.status(201).json("success");
});

module.exports = {
  getAllUsers,
  addNewUser,
  addMultipleUsers,
};
