import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app";

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.querySelector("#react-app")
);
