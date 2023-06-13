import React, { FC, useState } from "react";
import { ITodosListProps } from "../../types";
import Todo from "./Todo";

const TodosList: FC<ITodosListProps> = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TODO'S LIST</h1>
      {props.todosArray.map((todo, index) => (
        <Todo number={index + 1} todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodosList;
