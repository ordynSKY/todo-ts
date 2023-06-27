import React, { FC } from "react";
import Search from "./Search";
import { ISidebar } from "./types";

const Sidebar: FC<ISidebar> = ({ filterTodos, onCompletedTodo }) => {
  return (
    <div>
      <h1>SIBEDAR</h1>
      <Search filterTodos={filterTodos} />
      <button onClick={() => onCompletedTodo(1)}>Completed</button>
      <button onClick={() => onCompletedTodo(2)}>Not completed</button>
    </div>
  );
};

export default Sidebar;
