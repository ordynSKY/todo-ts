import React, { FC } from "react";
import Todo from "./Todo";
import { ITodosListProps } from "./types";

const TodosList: FC<ITodosListProps> = ({
  todosArray,
  deleteTodo,
  toggleTodo,
}) => {
  return (
    <div style={{ width: 800, position: "absolute", left: 100, top: 120 }}>
      <h1 style={{ textAlign: "center" }}>TO DO LIST</h1>
      {todosArray?.map((onetodo, index) => (
        <Todo
          number={index + 1}
          key={onetodo.id}
          todo={onetodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodosList;
