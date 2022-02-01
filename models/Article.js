const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    author: String,
    authorId: String,
    articleId: String,
    title: String,
    text: String,
    category: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Article", ArticleSchema);
