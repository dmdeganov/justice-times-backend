const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    avatar: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("User", UserSchema);
