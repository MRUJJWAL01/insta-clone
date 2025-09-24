const app = require("./src/app");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection",(socket)=>{
    console.log("connection etacblished",socket.id);
    
})



server.listen(3000,()=>{
    console.log("server is running..");
    
})