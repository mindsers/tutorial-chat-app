import { useCallback, useState, useEffect, useRef } from "react";

import useSocket from "./use-socket";

export default function useSocketEvent(eventName) {
  const socket = useSocket()
  const callback = useRef(null)
  const [_data, setData] = useState(null)

  const handleChange = useCallback(data => {
    setData(data)

    if (callback.current != null) {
      callback.current(data)
    }
  }, [setData, callback.current])

  useEffect(() => {
    socket.on(eventName, handleChange)

    return () => socket.off(eventName, handleChange)
  }, [eventName, handleChange])

  const subscribe = (cb) => {
    if (typeof cb === "function") {
      callback.current = cb
    }
  }

  const emiter = (data) => {
    if (eventName == null) return

    socket.binary(false).emit(eventName, data)
  }

  return {
    on: subscribe,
    emit: emiter,
    data: _data,
  }
}