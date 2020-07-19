import React, { createContext, useRef } from "react";
import io from 'socket.io-client'

export const SocketContext = createContext(null)

export default function SocketProvider({ children, namespace, opt = {} }) {
  const socketRef = useRef(null)

  if (socketRef.current == null) {
    socketRef.current = io(namespace, {
      autoConnect: true,
      transports: ["websocket"],
      ...opt
    });
  }

  return <SocketContext.Provider value={socketRef.current} children={children} />
}
