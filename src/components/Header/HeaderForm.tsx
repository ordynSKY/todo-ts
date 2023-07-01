import React, { FC } from "react";
import TodoForm from "../TodoComponents/TodoForm";
import Header from "./Header";
import { IHeader } from "./types";

const HeaderForm: FC<IHeader> = ({ oneNewTodo }) => {
  return (
    <>
      <Header />
      <TodoForm oneNewTodo={oneNewTodo} />
    </>
  );
};

export default HeaderForm;
