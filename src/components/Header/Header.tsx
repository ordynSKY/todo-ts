import React, { FC } from "react";
import TodoForm from "../HomePage/TodoForm";
import { IHeader } from "./types";

const Header: FC<IHeader> = ({ todosArray, setTodosArray, todo, setTodo }) => {
  return (
    <>
      <TodoForm
        todosArray={todosArray}
        setTodosArray={setTodosArray}
        todo={todo}
        setTodo={setTodo}
      />
    </>
  );
};

export default Header;
