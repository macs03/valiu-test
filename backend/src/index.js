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
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "This is a Test" });
});

io.on("connection", socket => {
  console.info("a user connected", socket.client.id);

  resolvers.emitWelcomeMessage(socket);

  resolvers.disconect(socket);

  resolvers.amountTagEvent(socket, io);
});

server.listen(config.PORT, () => {
  console.info(`App server runing in port http://localhost:${config.PORT}`);
});
