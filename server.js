const http = require("http");
const express = require("express");
const app = express();
app.use(express.static("./"));
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  socket.on("messageFromClient", (data) => {
     //? io is for global sen message to all client
      io.emit("messageFromServer", data);

  });
});

server.listen(3000, () => console.log("server run on port 3000"));
