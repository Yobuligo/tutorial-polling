import { RequestHandler } from "./RequestHandler";

export interface IPoll<T> {
  onPoll(onChange: RequestHandler<T>): void;
}
