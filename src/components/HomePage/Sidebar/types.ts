import { ITodo } from "../../../types/types";

export interface ISidebar {
  filterTodos: (e: string) => ITodo[] | null | undefined;
  onCompletedTodo: (e: number) => void;
}

export interface ISearch {
  filterTodos: (e: string) => ITodo[] | null | undefined;
}
