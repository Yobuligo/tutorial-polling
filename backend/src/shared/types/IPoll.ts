import { PollHandler } from "./PollHandler";

export interface IPoll<T> {
  onPoll(onChange: PollHandler<T>): void;
}
