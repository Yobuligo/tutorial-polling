import { IPoll } from "../shared/model/IPoll";

export interface IPollRepository {
  create(): IPoll;
  findById(id: number): IPoll | undefined;
}
