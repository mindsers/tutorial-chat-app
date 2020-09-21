import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import useSocketEvent from '../hooks/use-socket-event';

export default function UserToolbar() {
  const { room } = useParams()
  const [text, setText] = useState("");
  const { emit: sendMessage } = useSocketEvent('newMessage')

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        sendMessage(text, room);
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