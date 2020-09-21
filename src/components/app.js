import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SocketProvider from '../context/socket-provider'

import Home from './home'
import Rooms from './rooms'

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <SocketProvider namespace="/">
        <Route path="/rooms/:room" component={Rooms} />
      </SocketProvider>
    </Switch>
  )
}