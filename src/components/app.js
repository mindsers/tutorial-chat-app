import React from 'react'
import ChatPage from './chat'

import SocketProvider from '../context/socket-provider'

export default function App() {
  return (
    <SocketProvider namespace="/">
      <ChatPage />
    </SocketProvider>
  )
}