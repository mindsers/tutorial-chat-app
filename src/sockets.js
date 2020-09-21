import socketIO from "socket.io";

const usernames = new Map();

export default server => {
  const io = socketIO(server);

  io.on("connection", socket => {
    socket.on("joinChat", (username, room = socket.id) => {
      socket.join(room)
      usernames.set(socket.id, username);

      socket.to(room).emit("newMessage", {
        type: "system",
        text: `${username} just joined the chat`
      });
    });

    socket.on("newMessage", (text, to = socket.id) => {
      io.to(to).emit("newMessage", {
        type: "message",
        username: usernames.get(socket.id),
        timestamp: Date.now(),
        text
      });
    });
  });
};
