import { IEntity } from "../types/IEntity";
import { IEntityMeta } from "./../types/IEntityMeta";

export interface ITodo extends IEntity {
  text: string;
}

export const TodoMeta: IEntityMeta = { path: "/persons" };
