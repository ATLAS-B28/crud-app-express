require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const connectDb = require("./server/database/connectDb");
const router = require("./server/router/router");
const bodyparser = require("body-parser");
app.use(morgan("tiny"));
connectDb();
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
