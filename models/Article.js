const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    authorId: String,
    title: String,
    text: String,
    category: String,
    imagePath: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Article", ArticleSchema);
