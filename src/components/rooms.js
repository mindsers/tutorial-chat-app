import React from 'react'
import { useParams } from 'react-router-dom'

import Chat from './chat'

export default function Rooms() {
  const { room } = useParams()

  if (room == null) {
    return
  }
  
  return <Chat />
}