import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SocketProvider from '../context/socket-provider'

import Chat from './chat'

export default function App() {
  return (
    <Switch>
      <SocketProvider namespace="/">
        <Route path="/rooms/:room" component={Chat} />
      </SocketProvider>
    </Switch>
  )
}