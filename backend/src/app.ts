import bodyParser from "body-parser";
import express from "express";
import { PollController } from "./controllers/PollController";

const server = express();
server.use(bodyParser.json());
server.use(new PollController().router);
server.listen(5000);
