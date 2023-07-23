import { IPoll } from "../shared/model/IPoll";

export interface IPollRepository {
  create(): IPoll;
  deleteById(id: number): boolean;
  findById(id: number): IPoll | undefined;
}
