import { InMemoryRepository } from "../repositories/InMemoryRepository";
import { IPoll, PollMeta } from "../shared/model/IPoll";
import { Controller } from "./Controller";

export class PollController extends Controller<IPoll> {
  constructor() {
    super(PollMeta.path, new InMemoryRepository<IPoll>());
  }
}
