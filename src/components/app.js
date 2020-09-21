import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SocketProvider from '../context/socket-provider'

import Rooms from './rooms'

export default function App() {
  return (
    <Switch>
      <SocketProvider namespace="/">
        <Route path="/rooms/:room" component={Rooms} />
      </SocketProvider>
    </Switch>
  )
}