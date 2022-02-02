const express = require("express");
const router = express.Router();
const { getImages, postImage } = require("../controllers/images-controller");
router.route("/").get(getImages).post(postImage);

module.exports = router;
