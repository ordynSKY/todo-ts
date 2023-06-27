import { ITodo } from "../../../types/types";

export interface ISidebar {
  filterTodos: (e: string) => ITodo[] | null | undefined;
}
