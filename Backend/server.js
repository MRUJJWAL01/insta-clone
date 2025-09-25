require("dotenv").config();
const app = require("./src/app");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");


const server = http.createServer(app);


const io = socketIo(server);

const port = process.env.PORT || 3000;



io.on("connection",(socket)=>{
    console.log("connection establish",socket.id);
    socket.on("chat",(msg)=>{
        console.log("msg received from client",msg);
    })
})



server.listen(port, ()=>{
    console.log("server is running on");
    
})
