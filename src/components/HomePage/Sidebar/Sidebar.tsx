import React, { FC } from "react";
import Search from "./Search";
import { ISidebar } from "./types";

const Sidebar: FC<ISidebar> = ({ filterTodos, onCompletedTodo }) => {
  return (
    <div>
      <h1>SIBEDAR</h1>
      <Search filterTodos={filterTodos} />
      <button
        onClick={() => onCompletedTodo(1)}
        style={{
          marginTop: 10,
          marginRight: 25,
          padding: 5,
          border: "1px solid black",
          background: "transparent",
          borderRadius: 10,
          cursor: "pointer",
          height: 35,
        }}
      >
        Completed
      </button>
      <button
        onClick={() => onCompletedTodo(2)}
        style={{
          padding: 5,
          border: "1px solid black",
          background: "transparent",
          borderRadius: 10,
          cursor: "pointer",
          height: 35,
        }}
      >
        Not completed
      </button>
    </div>
  );
};

export default Sidebar;
