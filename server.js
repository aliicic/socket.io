const http = require("http");
const server = http.createServer();
const socketIO = require("socket.io")
const io = socketIO(server, {
    cors: {
        origin:'*'
    }
})
io.on("connection", (socket) => {
    socket.on("welcome", (data) => {
       console.log(data);
   })
   socket.emit("welcome-client", "welcome to server")
})


server.listen(3000,()=>console.log("server run on port 3000"))

