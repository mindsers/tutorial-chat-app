import React, { useState, useCallback, useEffect } from "react";

import UsernameModal from "./username-modal";
import useSocketEvent from "../hooks/use-socket-event";
import ConversationView from "./conversation-view";

export default function ChatPage() {
  const [text, setText] = useState("");
  const [username, setUsername] = useState(null);

  const { emit: joinChat } = useSocketEvent('joinChat')
  const { emit: sendMessage } = useSocketEvent('newMessage')

  useEffect(() => {
    if (username == null) return

    joinChat(username)
  }, [username])

  return (
    <div className={"container"}>
      {(username == null || username.length < 1) && (
        <UsernameModal onChange={value => setUsername(value)} />
      )}

      <ConversationView viewer={username} />
      <form
        onSubmit={event => {
          event.preventDefault();

          sendMessage(text);
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
