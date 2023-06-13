import React, { FC } from "react";
import { ITodoProps } from "../../types";
import HeaderButton from "../Header/HeaderButton";
import styles from "./Todos.module.css";

const Todo: FC<ITodoProps> = (props) => {
  const buttonStyles = {
    marginRight: "5px",
  };
  return (
    <div className={styles.todos}>
      <div>
        <strong>
          {props.number}. {props.todo.title}
        </strong>
        <div>{props.todo.body}</div>
      </div>
      <div className={styles.buttons}>
        <HeaderButton buttonStyles={buttonStyles}>Delete</HeaderButton>
        <button className={styles.done}>Done</button>
      </div>
    </div>
  );
};

export default Todo;
