require("dotenv").config();
const app = require("./src/app");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");
const cacheClient = require("./src/services/chache.service");
const connectDb = require("./src/db/db");
const cors = require("cors");
const server = http.createServer(app);


const port = process.env.PORT || 3000;
connectDb();


cacheClient.on("connect", () => {
  console.log("Redis connected successfully");
});
cacheClient.on("error", (error) => {
  console.log("error in connecting ioreds", error);
});

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    Credential: true,
  },
});

io.on("connection", (socket) => {
  console.log("connection establish", socket.id);
  socket.on("chat", (msg) => {
    console.log("msg received from client", msg);
  });
});

server.listen(port, () => {
  console.log("server is running on", port);
});
