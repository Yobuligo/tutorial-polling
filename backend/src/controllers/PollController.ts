import { Router } from "express";
import { IPollRepository } from "../services/IPollRepository";
import { PollMeta } from "../shared/model/IPoll";

export class PollController {
  readonly router = Router();

  constructor(private readonly pollRepository: IPollRepository) {}

  post() {
    this.router.post(PollMeta.path, (req, res) => {
      const poll = this.pollRepository.create();
      res.status(201).send(poll);
    });
  }
}
