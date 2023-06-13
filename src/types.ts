import { ReactNode } from "react";

export type ITodoProps = {
  todos: {
    id: number;
    title: string;
    body: string;
  };
  number: number;
  todo: objTodo;
  setTodo: React.Dispatch<React.SetStateAction<objTodo>>;
};
export type objTodos = {
  id: number;
  title: string;
  body: string;
};
export type objTodo = {
  title: string;
  body: string;
};

export type IHeaderInputProps = {
  inputValue: string;
  setTodo: React.Dispatch<React.SetStateAction<objTodo>>;
  placeholder: string;
  todo: objTodo;
  fieldName: string;
};
export type IHeaderButtonProps = {
  isDisabled?: boolean;
  onClick?: onClick;
  children: ReactNode;
  buttonStyles?: IButtonStyle;
};
export type IButtonStyle = {
  marginRight: string;
};
export type onClick = () => void;
export type ITodosListProps = {
  todosArray: objTodos[];
  todo: objTodo;
  setTodo: React.Dispatch<React.SetStateAction<objTodo>>;
  deleteTodo?: onClick;
};
export type IHeader = {
  todosArray: objTodos[];
  todo: objTodo;
  setTodo: React.Dispatch<React.SetStateAction<objTodo>>;
  setTodosArray: React.Dispatch<React.SetStateAction<objTodos[]>>;
};
