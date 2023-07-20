import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export class Repository<T extends IEntity> implements IRepository<T> {
  add(entity: IEntityDetails<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }

  deleteById(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  findAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
}
