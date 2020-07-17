import http from "http";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index";
import apiRouter from "./routes/api/index";
import addSocket from "./sockets";

const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", apiRouter);
app.use("/", indexRouter);

const server = http.createServer(app);

addSocket(server);

const listener = server.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
