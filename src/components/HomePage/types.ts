import { ITodo, TOnClick } from "../../types/types";

export interface ITodoProps {
  number: number;
  todo: ITodo;
  setTodo: React.Dispatch<React.SetStateAction<ITodo>>;
  deleteTodo: TOnClick;
  toggleTodo: (id: ITodo) => void;
}
export interface ITodosListProps {
  todosArray: ITodo[] | null | undefined;
  toggleTodo: (id: ITodo) => void;
  todo: ITodo;
  setTodo: React.Dispatch<React.SetStateAction<ITodo>>;
  deleteTodo: (id: number) => void;
}
