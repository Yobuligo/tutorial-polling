import { IPoll } from "../shared/model/IPoll";
import { IPollRepository } from "./IPollRepository";

class PollRepositoryDefault implements IPollRepository {
  private cursor = -1;
  private polls = new Map<number, IPoll>();

  constructor() {}

  create(): IPoll {
    this.cursor++;
    const poll: IPoll = {
      id: this.cursor,
      version: new Date(),
      createdAt: new Date(),
      changedAt: new Date(),
    };
    this.polls.set(poll.id, poll);
    return poll;
  }

  deleteById(id: number): boolean {
    return this.polls.delete(id);
  }

  findById(id: number): IPoll | undefined {
    return this.polls.get(id);
  }
}

export const PollRepository = new PollRepositoryDefault();
