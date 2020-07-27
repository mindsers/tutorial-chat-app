import React, { useState } from 'react'

import useSocketEvent from '../hooks/use-socket-event';

export default function ConversationView({ viewer }) {
  const [messages, setMessages] = useState([]);
  const { on: onMessage } = useSocketEvent('newMessage')

  onMessage(data => {
    if (data == null) {
      console.log(data)
      return
    }

    setMessages(prevValue => [data, ...prevValue])
  })

  return (
    <ul className={"discussion"}>
      {messages.map((item, index) => (
        <li
          key={index}
          className={`${item.type} ${
            viewer === item.username ? "mine" : ""
          }`}
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
  )
}