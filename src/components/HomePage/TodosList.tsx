import React, { FC, useState } from "react";
import { ITodoProps, ITodosListProps } from "../../types";
import Todo from "./Todo";

const TodosList: FC<ITodosListProps> = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TODO'S LIST</h1>
      {props.todosArray.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodosList;
