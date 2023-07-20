import { IPoll } from "../shared/types/IPoll";
import { PollHandler } from "../shared/types/PollHandler";
import { RequestHandler } from "../shared/types/RequestHandler";

export class ShortPolling<T> implements IPoll<T> {
  constructor(private readonly request: RequestHandler<T>) {}

  onPoll(onChange: PollHandler<T>): void {
    throw new Error("Method not implemented.");
  }
}
