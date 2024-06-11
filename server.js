const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const authRoutes = require("./routes/auth");
const uploadRoutes = require("./routes/upload");
const chatRoutes = require("./routes/chat");
const chatController = require("./controllers/chatController");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/upload", uploadRoutes);
app.use("/chat", chatRoutes);
app.use("/uploads", express.static("uploads"));

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (token) {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = user;
      next();
    } catch (error) {
      next(new Error("Authentication error"));
    }
  } else {
    next(new Error("Authentication error"));
  }
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.user);
  chatController.handleMessage(io, socket);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
