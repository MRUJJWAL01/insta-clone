const express = require("express");
const AuthRoute = require("./routes/auth.routes");
const PostRoute = require("./routes/post.route");
const UserRoute = require("./routes/user.route");
const ChatRoute = require("./routes/chat.routes");
const cors = require("cors");

const cookie = require("cookie-parser");
const app = express();
const path = require("path");

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://insta-clone-delta-five.vercel.app",
    ],
    credentials: true,
  })
);

app.use(cookie());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", AuthRoute);
app.use("/api/post", PostRoute);
app.use("/api/user", UserRoute);
app.use("/api/chats", ChatRoute);

module.exports = app;
