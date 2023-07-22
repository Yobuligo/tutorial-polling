import { Router } from "express";

export class PollController {
  readonly router = Router();

  constructor() {}

  requestPollId() {
    this.router.get("/polls/request", (req, res) => {
      res.status(200).send(crypto.randomUUID());
    });
  }
}
