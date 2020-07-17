import express from "express";
import { renderToString } from "react-dom/server";
import React from "react";
import ChatPage from "../components/chat";

const router = express.Router();

/* GET home page. */
router.get("*", async function(req, res, next) {
  const reactApp = renderToString(<ChatPage />);
  res.render("index", { reactApp });
});

export default router;
