import { useContext } from "react";

import { SocketContext } from "../context/socket-provider";

export default function useSocket() {
  return useContext(SocketContext)
}