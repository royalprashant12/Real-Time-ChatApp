import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server as SocketIOServer } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: "*", // Adjust as needed for security
    methods: ["GET", "POST"]
  }
});
dotenv.config();
// to allow cross-origin requests
// to allow cross-origin requests

const port = process.env.PORT || 4000;
const dbUrl = process.env.MOONGODB_URI;
// MongoDB connection URL from environment variables
app.use(cookieParser()); // to parse cookies
// Middleware to parse cookies
app.use(express.json()); // to parse JSON bodies
// Middleware to parse JSON bodies

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
try {
  mongoose.connect(dbUrl);
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);
// with the help of middleware we send userroute to the user

const userSocketMap = {};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap[userId] = socket.id;
  }
  console.log("A user connected: " + socket.id);

  socket.on("disconnect", () => {
    if (userId) {
      delete userSocketMap[userId];
    }
    console.log("A user disconnected: " + socket.id);
  });
});

export { io, userSocketMap };

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
