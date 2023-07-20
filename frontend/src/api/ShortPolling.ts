import { IPoll } from "../shared/types/IPoll";
import { RequestHandler } from "../shared/types/RequestHandler";

export class ShortPolling<T> implements IPoll<T> {
  constructor(private readonly request: RequestHandler<T>) {}

  onPoll(onChange: RequestHandler<T>): void {
    throw new Error("Method not implemented.");
  }
}
