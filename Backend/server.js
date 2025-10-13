require("dotenv").config();
const app = require("./src/app");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");
const cacheClient = require("./src/services/chache.service");
const connectDb = require("./src/db/db");
const messageModel = require("./src/models/message.model");
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

const onlineUsers = [];

io.on("connection", (socket) => {
  console.log("connection establish", socket.id);
  socket.emit("teke_SID", socket.id);
  
  socket.on("join-room", (chatUsers) => {
    socket.join(chatUsers.roomId);
    if (chatUsers.socket_id) {
      onlineUsers.push(chatUsers.socket_id);
    }
    console.log("for my tracking purpose", onlineUsers);
    console.log("user join with room id", chatUsers.roomId);
  });
  socket.on("send-msg", async (msg) => {
    console.log("incoming msg", msg);
    if (msg) {
      let newMessage = await messageModel.create({
        sender_id: msg.sender_id,
        receiver_id: msg.receiver_id,
        room_id: msg.roomId,
        content: msg.text,
      });
    }
    io.to(msg.roomId).emit("receive-msg", msg);
  });

  socket.on("chat", (msg) => {
    console.log("msg received from client", msg);
    socket.emit("chat", "badia hai bhai");
  });
  socket.on("disconnect", () => {
    console.log("user disconnect");
  });
});

server.listen(port, () => {
  console.log("server is running on", port);
});
