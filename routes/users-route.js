const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  addNewUser,
  addMultipleUsers,
  editUser,
} = require("../controllers/users-controller");
router.route("/").get(getAllUsers).post(addNewUser);
router.route("/addmany").post(addMultipleUsers);
router.route("/:id").patch(editUser);
module.exports = router;
