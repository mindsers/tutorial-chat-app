import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [roomName, setRoomName] = useState('')

  return (
    <div className="Home">
      <h1 className="title">Chat App</h1>
      <div className="content">
        <input type="text" placeholder="room-slug" value={roomName} onChange={event => setRoomName(event.target.value)} />
        <Link to={`/rooms/${roomName}`}>
          Create a room
        </Link>
      </div>
    </div>
  )
}