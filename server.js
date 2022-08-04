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
  // socket.emit("broadcasting", "hello every one");
  console.log(socket.handshake.query);
  console.log(socket.handshake.headers['authorization']);
});

// io.of("/teachers").on("connection", (socket) => {
//   socket.on("welcome-teachers-client", (data) => {
//     console.log(data);
//   });
//   socket.emit("welcome-teachers", "hello teachers welcome to your server\n\n");
// });
// io.of("/students").on("connection", (socket) => {
//   socket.on("welcome-students-client", (data) => {
//     console.log(data);
//   });
//   socket.emit("welcome-students", "hello students welcome to your server\n\n");
// });

server.listen(3000, () => console.log("server run on port 3000"));
