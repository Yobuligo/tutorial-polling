import { IEntity } from "../types/IEntity";
import { IEntityDetails } from "../types/IEntityDetails";

export interface IRepository<T extends IEntity> {
  add(entity: IEntityDetails<T>): Promise<T>;
  deleteById(id: number): Promise<boolean>;
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T | undefined>;
}
