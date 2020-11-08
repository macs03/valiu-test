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
  console.log("a user connected");
});

server.listen(config.PORT, () => {
  console.log(`App server runing in port http://localhost:${config.PORT}`);
});
