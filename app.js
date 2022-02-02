const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const images = require("./routes/images-route");
const users = require("./routes/users-route");
const articles = require("./routes/articles-route");
const Image = require("./models/Image");
const connectDB = require("./db/connect");
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const fileUpload = require("./middlewares/file-upload");
require("dotenv").config();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});
// app.use(express.static("./public"));
app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use(express.json());
// routes
app.use("/users", users);
app.use("/articles", articles);
app.use("/images", fileUpload.single("image"));
app.use("/images", images);
app.use(notFound);
app.use(errorHandlerMiddleware);

//connecting to mongodb, spinning the server
const port = process.env.PORT || 9000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
