import React, { useState } from 'react'
import useSocketEvent from '../hooks/use-socket-event';

export default function UserToolbar() {
  const [text, setText] = useState("");
  const { emit: sendMessage } = useSocketEvent('newMessage')

  return (
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
  )
}