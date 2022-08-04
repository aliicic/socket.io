// const teachersSocket = io("ws://localhost:3000/teachers");
// teachersSocket.on("connect", (data) => {
//   teachersSocket.emit(
//     "welcome-teachers-client",
//     "hello i am teachers name space"
//   );
//   teachersSocket.on("welcome-teachers", (data) => {
//     document.write(data);
//   });
// });
// const studentSocket = io("ws://localhost:3000/students");
// studentSocket.on("connect", (data) => {
//   studentSocket.emit(
//     "welcome-students-client",
//     "hello i am students name space"
//   );
//   studentSocket.on("welcome-students", (data) => {
//     document.write(data);
//   });
// });
const socket = io("ws://localhost:3000/", {
  query: {
    field1: "value1",
    field2: "value2",
  },
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: "Bearer <token>",
      },
    },
  },
});
socket.on("connect", (data) => {
  //   socket.on("broadcasting", (data) => {
  //     document.write(data);
  //   });
});
