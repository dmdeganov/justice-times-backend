const Image = require("../models/Image");

const postImage = async (req, res, next) => {
  console.log("postImage");
  console.log(req.file);

  const path = req.file.path;
  const createdImage = new Image({ path });

  try {
    await createdImage.save();
    res.json({ path });
  } catch (err) {
    console.log(err);

    return next(error);
  }
};
const getImages = async (req, res, next) => {
  let images;
  try {
    images = await Image.find({});
    res.json(images);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getImages,
  postImage,
};
