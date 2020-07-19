import React from 'react'
import Chat from './chat'

import SocketProvider from '../context/socket-provider'

export default function App() {
  return (
    <SocketProvider namespace="/">
      <Chat />
    </SocketProvider>
  )
}