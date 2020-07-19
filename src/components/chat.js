import React, { useState, useEffect } from "react";

import UsernameModal from "./username-modal";
import useSocketEvent from "../hooks/use-socket-event";
import ConversationView from "./conversation-view";
import UserToolbar from "./user-toolbar";

export default function ChatPage() {
  const [username, setUsername] = useState(null);
  const { emit: joinChat } = useSocketEvent('joinChat')

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
      <UserToolbar />
    </div>
  );
}
