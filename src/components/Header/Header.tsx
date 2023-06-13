import React, { FC } from "react";
import { IHeader } from "../../types";
import TodoForm from "../HomePage/TodoForm";

const Header: FC<IHeader> = ({ todosArray, setTodosArray }) => {
  return (
    <div>
      <TodoForm todosArray={todosArray} setTodosArray={setTodosArray} />
    </div>
  );
};

export default Header;
