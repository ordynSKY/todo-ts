import { IObjTodo, IObjTodos, TOnClick } from "../../types/types";

export interface ITodoProps {
  todos: {
    id: number;
    title: string;
    body: string;
  };
  number: number;
  todo: IObjTodo;
  setTodo: React.Dispatch<React.SetStateAction<IObjTodo>>;
  deleteTodo: TOnClick;
}
export interface ITodosListProps {
  todosArray: IObjTodos[];
  todo: IObjTodo;
  setTodo: React.Dispatch<React.SetStateAction<IObjTodo>>;
  deleteTodo: (id: number) => void;
}
