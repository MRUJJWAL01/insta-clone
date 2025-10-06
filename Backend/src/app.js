const express = require("express");
const AuthRoute = require("./routes/auth.routes");
const PostRoute = require("./routes/post.route");
const UserRoute = require("./routes/user.route");
const cookie = require("cookie-parser");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(express.json());

app.use(cookie());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", AuthRoute);
app.use("/api/post", PostRoute);
app.use("/api/user", UserRoute);

module.exports = app;
