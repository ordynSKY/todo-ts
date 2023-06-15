import React, { FC, useState } from "react";
import HeaderButton from "../Header/HeaderButton";
import styles from "./Todos.module.css";
import { ITodoProps } from "./types";

const buttonStyles = {
  marginRight: "5px",
};

const Todo: FC<ITodoProps> = ({ number, todos, deleteTodo, todo }) => {
  const [backgroundStyle, setBackgroundStyle] = useState<boolean>(false);
  const { title, body } = todos;

  const changeColor = () => {
    setBackgroundStyle(!backgroundStyle);
  };

  return (
    <div
      className={styles.todos}
      style={{ backgroundColor: backgroundStyle ? "gainsboro" : "transparent" }}
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
        <HeaderButton onClick={changeColor}>Done</HeaderButton>
      </div>
    </div>
  );
};

export default Todo;
