import socketIO from "socket.io";

const usernames = new Map();

export default server => {
  const io = socketIO(server);

  io.on("connection", socket => {
    socket.on("chat-enter", username => {
      usernames.set(socket.id, username);

      socket.broadcast.emit("message", {
        type: "system",
        text: `${username} just joined the chat`
      });
    });
    socket.on("new-message", text => {
      io.sockets.emit("message", {
        type: "message",
        username: usernames.get(socket.id),
        timestamp: Date.now(),
        text
      });
    });
  });
};
