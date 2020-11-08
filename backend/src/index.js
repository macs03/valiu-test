import express from "express";
import bodyParser from "body-parser";
import http from "http";
import cors from "cors";
import config from "./config";
import resolvers from "./resolvers";

const app = express();

const server = http.createServer(app);

const io = require("socket.io")(server);

// Use cors for all origins
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "This is a Test" });
});

app.use(bodyParser.json());

io.on("connection", socket => {
  console.info("a user connected", socket.client.id);

  socket.broadcast.emit("hi");

  socket.on("disconnect", () => {
    console.info("user disconnected", socket.client.id);
  });

  socket.on("badged", msg => {
    console.info(msg);
    io.emit("badged", msg);
  });
});

server.listen(config.PORT, () => {
  console.info(`App server runing in port http://localhost:${config.PORT}`);
});
