const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  addNewUser,
  addMultipleUsers,
} = require("../controllers/users-controller");
router.route("/").get(getAllUsers).post(addNewUser);
router.route("/addmany").post(addMultipleUsers);

module.exports = router;
