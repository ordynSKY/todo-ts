import React, { FC } from "react";
import { IHeader } from "../../types";
import TodoForm from "../HomePage/TodoForm";

const Header: FC<IHeader> = ({ todosArray, setTodosArray, todo, setTodo }) => {
  return (
    <div>
      <TodoForm
        todosArray={todosArray}
        setTodosArray={setTodosArray}
        todo={todo}
        setTodo={setTodo}
      />
    </div>
  );
};

export default Header;
