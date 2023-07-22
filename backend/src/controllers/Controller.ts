import { Router } from "express";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export abstract class Controller<T extends IEntity> {
  readonly router = Router();

  constructor(
    protected readonly path: string,
    protected readonly repository: IRepository<T>
  ) {
    this.add();
    this.delete();
    this.findAll();
    this.findById();
  }

  protected add() {
    this.router.post(this.path, async (req, res) => {
      const body: IEntityDetails<T> = req.body;
      const entity = await this.repository.add(body);
      res.status(201).send(entity);
    });
  }

  protected delete() {
    this.router.delete(`${this.path}/:id`, async (req, res) => {
      const success = await this.repository.deleteById(parseInt(req.params.id));
      if (success) {
        res.status(200).send(true);
      } else {
        res.status(404).send(false);
      }
    });
  }

  protected findAll() {
    this.router.get(this.path, async (_, res) => {
      const entities = await this.repository.findAll();
      res.status(200).send(entities);
    });
  }

  protected findById() {
    this.router.get(`${this.path}/:id`, async (req, res) => {
      const entity = await this.repository.findById(parseInt(req.params.id));
      if (entity) {
        res.status(200).send(entity);
      } else {
        res.status(404);
      }
    });
  }
}
