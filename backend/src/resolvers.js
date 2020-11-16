let allMessages = [];

const handleAddEvents = event => {
  allMessages.push({
    id: allMessages.length,
    amount: event.amount,
    color: event.color
  });

  allMessages.reverse();
};

const handleDeleteEvents = event => {
  const arrayFiltered = allMessages.filter(item => item.id !== event.id);

  allMessages = arrayFiltered.reverse();
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
      console.info("ADD");
      console.info(message);
      handleAddEvents(message);
      io.emit("amountTag", allMessages);
    });

    socket.on("deleteAmountTag", message => {
      console.info("DELETE");
      console.info(message);
      handleDeleteEvents(message);
      io.emit("amountTag", allMessages);
    });

    socket.on("editAmountTag", message => {
      console.info("EDIT");
      console.info(message);
      handleEvents(message);
      io.emit("amountTag", allMessages);
    });

    socket.on("PING", () => {
      io.emit("amountTag", allMessages);
    });
  }
};
