import React, { FC } from "react";
import TodoForm from "../TodoComponents/TodoForm";
import Header from "./Header";
import { IHeader } from "./types";

const HeaderForm: FC<IHeader> = ({ oneNewTodo, todosLength }) => {
  return (
    <>
      <Header />
      <TodoForm oneNewTodo={oneNewTodo} todosLength={todosLength} />
    </>
  );
};

export default HeaderForm;
