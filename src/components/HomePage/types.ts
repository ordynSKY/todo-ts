import { ITodo } from "../../types/types";

export interface ITodoProps {
  number: number;
  todo: ITodo;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
export interface ITodosListProps {
  todosArray: ITodo[] | null | undefined;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
