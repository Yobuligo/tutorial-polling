import { IEntity } from "../types/IEntity";
import { IEntityMeta } from "../types/IEntityMeta";

export interface IPoll extends IEntity {
  version: Date;
}

export const PollMeta: IEntityMeta = { path: "/polls" };
