import { IIdGenerator } from "./IIdGenerator";

export class IdGenerator implements IIdGenerator {
  private cursor = -1;

  get next(): number {
    this.cursor++;
    return this.cursor;
  }
}
