const express = require("express");
const socket = require("socket.io");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const server = app.listen("8000", () => {
  console.log("Server Running on Port 8000...");
});

io = socket(server, {
  cors:{
      origins: [""],
      handlePreflightRequest: (req, res) => {
          const headers = {
              "Access-Control-Allow-Headers": "Content-Type, Authorization",
              "Access-Control-Allow-Origin": "", //or the specific origin you want to give access to,
              "Access-Control-Allow-Credentials": true
          };
          res.writeHead(200, headers);
          res.end();
      }
  }
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("User Joined Room: " + data);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data.content);
  });

  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED");
  });
});
