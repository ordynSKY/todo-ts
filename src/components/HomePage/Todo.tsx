import React, { FC } from "react";
import { ITodoProps } from "../../types";
import styles from "./Todos.module.css";

const Todo: FC<ITodoProps> = (props) => {
  return (
    <div className={styles.todos}>
      <div>
        <strong>
          {props.todo.id}. {props.todo.title}
        </strong>
        <div>{props.todo.body}</div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.delete}>Delete</button>
        <button className={styles.done}>Done</button>
      </div>
    </div>
  );
};

export default Todo;
