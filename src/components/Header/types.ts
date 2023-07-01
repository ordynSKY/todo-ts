import { FormEvent, ReactNode } from "react";
import { ITodo } from "../../types/types";

export interface IHeader {
  oneNewTodo: (e: ITodo) => void;
}
export interface IHeaderButtonProps {
  isDisabled?: boolean;
  onClick?: (e: any) => void;
  children: ReactNode;
  buttonStyles?: IButtonStyle;
}
export interface IButtonStyle {
  marginRight: string;
}
export interface IHeaderInputProps {
  value: string;
  placeholder: string;
  getValues: (e: string) => void;
}
