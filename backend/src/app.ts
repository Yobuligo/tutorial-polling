import bodyParser from "body-parser";
import express from "express";
import { Controller } from "./controllers/Controller";
import { InMemoryRepository } from "./repositories/InMemoryRepository";
import { IPoll } from "./shared/model/IPoll";

const server = express();
server.use(bodyParser.json());
server.use(new Controller("/polls", new InMemoryRepository<IPoll>()).router);
server.listen(5000);
