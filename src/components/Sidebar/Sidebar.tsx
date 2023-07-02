import React, { FC } from "react";
import Search from "./Search";
import { ISidebar } from "./types";

const Sidebar: FC<ISidebar> = ({ filterTodos, onCompletedTodo, saveTodos }) => {
  return (
    <div>
      <h1>SIBEDAR</h1>
      <Search filterTodos={filterTodos} />
      <button
        onClick={() => onCompletedTodo("completed")}
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
        onClick={() => onCompletedTodo("notCompleted")}
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
      <div>
        <button
          onClick={() => saveTodos()}
          style={{
            padding: 5,
            border: "1px solid black",
            background: "transparent",
            borderRadius: 10,
            cursor: "pointer",
            height: 35,
            marginTop: 10,
            width: "100%",
          }}
        >
          SAVE TODOS
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
