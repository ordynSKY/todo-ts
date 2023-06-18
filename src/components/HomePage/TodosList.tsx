import React, { FC, useState } from "react";
import Todo from "./Todo";
import { ITodosListProps } from "./types";

const TodosList: FC<ITodosListProps> = ({
  todosArray,
  setTodo,
  deleteTodo,
  toggleTodo,
}) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TODO'S LIST</h1>
      {todosArray?.map((onetodo, index) => (
        <Todo
          number={index + 1}
          key={onetodo.id}
          todo={onetodo}
          setTodo={setTodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodosList;
