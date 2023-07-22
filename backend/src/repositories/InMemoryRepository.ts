import { IdGenerator } from "../services/IdGenerator";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export class InMemoryRepository<T extends IEntity> implements IRepository<T> {
  private readonly entities: T[] = [];
  private idGenerator = new IdGenerator();

  add(entity: IEntityDetails<T>): Promise<T> {
    return new Promise((resolve) => {
      const newEntity: T = {
        id: this.idGenerator.next,
        ...entity,
        createdAt: new Date(),
        changedAt: new Date(),
      } as T;
      this.entities.push(newEntity);
      resolve(newEntity);
    });
  }

  deleteById(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      const index = this.entities.findIndex((entity) => entity.id === id);
      if (index === -1) {
        resolve(false);
      } else {
        this.entities.splice(index, 1);
        resolve(true);
      }
    });
  }

  findAll(): Promise<T[]> {
    return new Promise((resolve) => {
      resolve(this.entities);
    });
  }

  findById(id: number): Promise<T | undefined> {
    return new Promise((resolve) => {
      const entity = this.entities.find((entity) => entity.id === id);
      resolve(entity);
    });
  }
}
