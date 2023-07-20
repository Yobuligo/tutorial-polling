import { IPoll } from "../shared/types/IPoll";

export interface IRequest<T> extends IPoll<T> {
  send(): Promise<T>;
}
