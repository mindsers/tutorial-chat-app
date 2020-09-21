import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [roomName, setRoomName] = useState('')
  return (
    <div>
      <h1>Chat App</h1>
      <div>
        <input type="text" value={roomName} onChange={event => setRoomName(event.target.value)} />
        <Link to={`/rooms/${roomName}`}>
          Create a room
        </Link>
      </div>
    </div>
  )
}