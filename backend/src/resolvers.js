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
  badgedEvent: (socket, io) => {
    socket.on("badged", message => {
      console.info(message);
      handleEvents(message);
      io.emit("badged", allMessages);
    });
  }
};
