const express = require("express");
 const AuthRoute = require("./routes/auth.routes");
const cookie = require("cookie-parser");
const app = express();
const path = require("path");
app.use(express.json());

app.use(cookie());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );


 app.use("/api/auth",AuthRoute);



module.exports = app;