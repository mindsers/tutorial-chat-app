import express from "express";
import { renderToString } from "react-dom/server";
import React from "react";
import App from "../components/app";

const router = express.Router();

router.get("*", async function(req, res, next) {
  const reactApp = renderToString(<App />);
  res.render("index", { reactApp });
});

export default router;
