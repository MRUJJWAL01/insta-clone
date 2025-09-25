const express = require("express");
const AuthRoute = require("./routes/auth.routes");
const cookie = require("cookie-parser");
const app = express();

app.use(express.json());

app.use(cookie());

app.use("/api/auth",AuthRoute);



module.exports = app;