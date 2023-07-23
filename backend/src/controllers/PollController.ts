import { Router } from "express";
import { IPollRepository } from "../services/IPollRepository";
import { PollMeta } from "../shared/model/IPoll";

export class PollController {
  readonly router = Router();

  constructor(private readonly pollRepository: IPollRepository) {}

  delete() {
    this.router.delete(`${PollMeta.path}/:id`, (req, res) => {
      const success = this.pollRepository.deleteById(parseInt(req.params.id));
      if (success) {
        res.status(200);
      } else {
        res.status(404);
      }
    });
  }

  post() {
    this.router.post(PollMeta.path, (_, res) => {
      const poll = this.pollRepository.create();
      res.status(201).send(poll);
    });
  }

  getById() {
    this.router.get(`${PollMeta.path}/:id`, (req, res) => {
      const poll = this.pollRepository.findById(parseInt(req.params.id));
      if (poll) {
        res.status(200).send(poll);
      } else {
        res.status(404);
      }
    });
  }
}
