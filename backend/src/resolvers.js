let allMessages = [];

const handleEvents = event => {
  allMessages.push(event);
  allMessages.reverse();
};

module.exports = {
  emitWelcomeMessage: socket => {
    socket.broadcast.emit("hi");
  },
  disconect: socket => {
    socket.on("disconnect", () => {
      console.info("user disconnected", socket.client.id);
    });
  },
  amountTagEvent: (socket, io) => {
    socket.on("amountTag", message => {
      console.info(message);
      handleEvents(message);
      io.emit("amountTag", allMessages);
    });

    socket.on("PING", () => {
      io.emit("badged", allMessages);
    });
  }
};
