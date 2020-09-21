import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../components/app";

const router = express.Router();

router.get("*", async function(req, res, next) {
  const reactApp = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );
  res.render("index", { reactApp });
});

export default router;
