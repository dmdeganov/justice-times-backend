const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

module.exports = mongoose.model("User", UserSchema);
