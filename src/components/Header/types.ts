import { ReactNode } from "react";
import { IObjTodo, IObjTodos, TOnClick } from "../../types/types";

export interface IHeader {
  todosArray: IObjTodos[];
  todo: IObjTodo;
  setTodo: React.Dispatch<React.SetStateAction<IObjTodo>>;
  setTodosArray: React.Dispatch<React.SetStateAction<IObjTodos[]>>;
}
export interface IHeaderButtonProps {
  isDisabled?: boolean;
  onClick?: TOnClick;
  children: ReactNode;
  buttonStyles?: IButtonStyle;
}
export interface IButtonStyle {
  marginRight: string;
}
export interface IHeaderInputProps {
  inputValue: string;
  setTodo: React.Dispatch<React.SetStateAction<IObjTodo>>;
  placeholder: string;
  todo: IObjTodo;
  fieldName: string;
}
