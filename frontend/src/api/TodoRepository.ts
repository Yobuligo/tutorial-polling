import { ITodo } from "../shared/model/ITodo";
import { Repository } from "./Repository";

export const TodoRepository = new Repository<ITodo>();
