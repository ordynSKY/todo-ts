import React, { FC, useState } from "react";
import HeaderButton from "../Header/HeaderButton";
import styles from "./Todos.module.css";
import { ITodoProps } from "./types";

const buttonStyles = {
  marginRight: "5px",
};

const Todo: FC<ITodoProps> = ({
  number,
  todos,
  deleteTodo,
  todo,
  toggleTodo,
}) => {
  const { title, body } = todos;

  const handleToggle = () => {
    toggleTodo(todo.id);
    console.log(todo);
  };

  return (
    <div
      className={styles.todos}
      style={{ backgroundColor: todo.completed ? "gainsboro" : "transparent" }}
    >
      <div>
        <strong>
          {number}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className={styles.buttons}>
        <HeaderButton
          buttonStyles={buttonStyles}
          onClick={() => deleteTodo(todos.id)}
        >
          Delete
        </HeaderButton>
        <HeaderButton onClick={handleToggle}>Done</HeaderButton>
      </div>
    </div>
  );
};

export default Todo;
