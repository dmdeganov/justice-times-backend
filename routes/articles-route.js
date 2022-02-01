const express = require("express");
const router = express.Router();
const {
  getAllArticles,
  addNewArticle,
  addMultipleArticles,
} = require("../controllers/articles-controller");
router.route("/").get(getAllArticles).post(addNewArticle);
router.route("/addmany").post(addMultipleArticles);

module.exports = router;
