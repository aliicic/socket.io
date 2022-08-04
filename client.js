const texBox = document.getElementById("chat-content");
const send = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");
const socket = io("http://localhost:3000/");


//? send message to server

socket.on("connect", (data) => {
  send.addEventListener("click", () => {
    if (!texBox.value) return alert("field most be filled");
    socket.emit("messageFromClient", texBox.value);
    texBox.value = "";
  });
});


let savedMessage = [];

//? get message from server

socket.on("messageFromServer", (data) => {
  savedMessage.push(data);
  localStorage.setItem("messages", savedMessage);
  const message = document.createElement("p");
  message.classList.add("messages");
  message.innerHTML = data;
  chatBox.appendChild(message);
});

//? for init previus message 
savedMessage.push(localStorage.getItem("messages"));
const allmsg = localStorage.getItem("messages");
allmsg.split(",").map((i) => {
  const message = document.createElement("p");
  message.classList.add("messages");
  message.innerHTML = i;
  chatBox.appendChild(message);
});
