import { ChangeEvent, FormEvent, ReactNode } from "react";
import { ITodo, TOnClick } from "../../types/types";

export interface IHeader {
  oneNewTodo: (e: ITodo) => void;
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
  value: string;
  placeholder: string;
  getValues: (e: any) => void;
}
