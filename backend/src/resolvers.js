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
    socket.on("badged", msg => {
      console.info(msg);
      io.emit("badged", msg);
    });
  }
};
