import React, { useState } from "react";

export default function UsernameModal({ onChange }) {
  const [username, setUsername] = useState("");

  return (
    <div className={"modalBackground"}>
      <div className={"modalContainer"}>
        <p>Please choose a username to enter the chat room</p>
        <form
          onSubmit={event => {
            event.preventDefault();

            if (username.length < 1) return;

            onChange(username);
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <br />
          <button type="submit">Commencer</button>
        </form>
      </div>
    </div>
  );
}
