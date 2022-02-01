const Article = require("../models/Article");
const asyncWrapper = require("../middlewares/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");
require("dotenv").config();

const getAllArticles = asyncWrapper(async (req, res) => {
  const allArticles = await Article.find({});
  if (!allArticles) {
    return next(createCustomError("There is no articles", 404));
  }
  res.status(200).json(allArticles);
});
const addNewArticle = asyncWrapper(async (req, res) => {
  const article = await Article.create(req.body);
  res.status(201).json(article);
});
const addMultipleArticles = asyncWrapper(async (req, res) => {
  req.body.forEach(async (article) => {
    await Article.create(article);
  });
  res.status(201).json("success");
});
module.exports = {
  getAllArticles,
  addNewArticle,
  addMultipleArticles,
};
