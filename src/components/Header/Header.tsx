import React, { FC } from "react";
import TodoForm from "../HomePage/TodoForm";
import { IHeader } from "./types";

const Header: FC<IHeader> = ({ oneNewTodo }) => {
  return (
    <>
      <TodoForm oneNewTodo={oneNewTodo} />
    </>
  );
};

export default Header;
