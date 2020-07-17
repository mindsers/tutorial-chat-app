import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import UsernameModal from "./username-modal";

const socket = io("/", {
  autoConnect: false,
  transports: ["websocket"]
});

export default function ChatPage() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (username == null) return;

    const onConnect = () => {
      socket.emit("chat-enter", username);
    };

    const onMessage = data => setMessages(prevValue => [...prevValue, data]);

    socket.open();
    socket.on("connect", onConnect);
    socket.on("message", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("message", onMessage);
      socket.close();
    };
  }, [username]);

  return (
    <div className={"container"}>
      {(username == null || username.length < 1) && (
        <UsernameModal onChange={value => setUsername(value)} />
      )}

      <ul className={"discussion"}>
        {messages.map((item, index) => (
          <li
            className={`${item.type} ${
              username === item.username ? "mine" : ""
            }`}
            key={index}
          >
            {item.username && (
              <div className={"info"}>
                {item.username}
                {" • "}
                {new Date(item.timestamp).toLocaleDateString()}
              </div>
            )}
            {item.text}
          </li>
        ))}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault();

          socket.emit("new-message", text);
          setText("");
        }}
      >
        <input
          className={"input"}
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </form>
    </div>
  );
}
