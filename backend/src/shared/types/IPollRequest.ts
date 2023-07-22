import { PollHandler } from "./PollHandler";

export interface IPollRequest<T> {
  onPoll(onChange: PollHandler<T>): void;
}
