import { IPoll } from "../shared/types/IPoll";
import { PollHandler } from "../shared/types/PollHandler";
import { RequestHandler } from "../shared/types/RequestHandler";
import { IRequest } from "./IRequest";
import { ShortPolling } from "./ShortPolling";
import { TodoRepository } from "./TodoRepository";

export class Request<T> implements IRequest<T> {
  private strategy: IPoll<T>;

  constructor(private readonly request: RequestHandler<T>) {
    this.strategy = new ShortPolling(request);
  }

  onPoll(onChange: PollHandler<T>): void {
    this.strategy.onPoll(onChange);
  }

  send(): Promise<T> {
    return this.request();
  }
}

const request = new Request(TodoRepository.findAll).onPoll(() => {});
