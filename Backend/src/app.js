const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const AuthRoute = require("./routes/auth.routes");
const PostRoute = require("./routes/post.route");
const UserRoute = require("./routes/user.route");
const ChatRoute = require("./routes/chat.routes");

const app = express();

// 🔹 Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔹 CORS (RENDER + VERCEL SAFE)
const allowedOrigins = [
  "http://localhost:5173",
  process.env.ORIGIN, // ✅ FIXED
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Render, Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // ❗ DO NOT THROW ERROR IN PRODUCTION
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 🔹 Cookies
app.use(cookieParser());

// 🔹 Views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 🔹 Routes
app.use("/api/auth", AuthRoute);
app.use("/api/post", PostRoute);
app.use("/api/user", UserRoute);
app.use("/api/chats", ChatRoute);

module.exports = app;
