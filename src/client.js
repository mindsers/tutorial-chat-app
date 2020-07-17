import React from "react";
import { hydrate } from "react-dom";

import ChatPage from "./components/chat";

hydrate(<ChatPage />, document.querySelector("#react-app"));
