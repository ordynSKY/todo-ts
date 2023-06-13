import { ReactNode } from "react";

export type ITodoProps = {
  todo: {
    id: number;
    title: string;
    body: string;
  };
  number: number;
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
  isDisabled: boolean;
  addNewTodo: AddNewTodo;
  children: ReactNode;
};
export type AddNewTodo = () => void;
export type ITodosListProps = {
  todosArray: objTodos[];
};
export type IHeader = {
  todosArray: objTodos[];
  setTodosArray: React.Dispatch<React.SetStateAction<objTodos[]>>;
};
