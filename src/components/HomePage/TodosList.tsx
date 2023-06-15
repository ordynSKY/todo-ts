import React, { FC, useState } from "react";
import Todo from "./Todo";
import { ITodosListProps } from "./types";

const TodosList: FC<ITodosListProps> = ({
  todosArray,
  todo,
  setTodo,
  deleteTodo,
}) => {
  console.log("tod", todosArray);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TODO'S LIST</h1>
      {todosArray.map((onetodo, index) => (
        <Todo
          number={index + 1}
          todos={onetodo}
          key={onetodo.id}
          todo={onetodo}
          setTodo={setTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodosList;
