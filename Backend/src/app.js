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

  // ⭐ CORS OPTIONS
  const allowedOrigins = [
    "http://localhost:5173",
    process.env.origin,
  ];
  // console.log(process.env.origin);
  


  const corsOptions = {
    origin: function (origin, callback) {
      // Postman / server-side calls ke liye origin null ho sakta hai
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };

  // ⭐ CORS middleware – sabse upar
  app.use(cors(corsOptions));
  // app.use(cookieParser());


app.use(cookie());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", AuthRoute);
app.use("/api/post", PostRoute);
app.use("/api/user", UserRoute);
app.use("/api/chats", ChatRoute);

module.exports = app;
