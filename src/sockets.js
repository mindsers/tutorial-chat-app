import socketIO from "socket.io";

const usernames = new Map();

export default server => {
  const io = socketIO(server);

  io.on("connection", socket => {
    socket.on("joinChat", username => {
      usernames.set(socket.id, username);

      socket.broadcast.emit("newMessage", {
        type: "system",
        text: `${username} just joined the chat`
      });
    });
    socket.on("newMessage", text => {
      io.sockets.emit("newMessage", {
        type: "message",
        username: usernames.get(socket.id),
        timestamp: Date.now(),
        text
      });
    });
  });
};
