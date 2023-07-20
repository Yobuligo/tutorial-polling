import { IPoll } from "../shared/types/IPoll";
import { RequestHandler } from "../shared/types/RequestHandler";
import { IRequest } from "./IRequest";
import { ShortPolling } from "./ShortPolling";

export class Request<T> implements IRequest<T> {
  private strategy: IPoll<T>;

  constructor(private readonly request: RequestHandler<T>) {
    this.strategy = new ShortPolling(request);
  }

  onPoll(onChange: RequestHandler<T>): void {
    this.strategy.onPoll(onChange);
  }

  send(): Promise<T> {
    return this.request();
  }
}
