import React, { FC, useState } from "react";
import { ITodoProps } from "../../types";
import HeaderButton from "../Header/HeaderButton";
import styles from "./Todos.module.css";

const Todo: FC<ITodoProps> = (props) => {
  const [isDone, setIsDone] = useState({ backgroundColor: "transparent" });
  const { number, todo } = props;
  const { title, body } = props.todos;
  const buttonStyles = {
    marginRight: "5px",
  };

  const changeBackground = () => {
    setIsDone({ backgroundColor: "gray" });
  };
  console.log(isDone);

  return (
    <div className={styles.todos}>
      <div>
        <strong>
          {number}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className={styles.buttons}>
        <HeaderButton buttonStyles={buttonStyles}>Delete</HeaderButton>
        <HeaderButton onClick={changeBackground}>Done</HeaderButton>
      </div>
    </div>
  );
};

export default Todo;
