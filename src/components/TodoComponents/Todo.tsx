import { FC } from "react";
import { useNavigate } from "react-router-dom";
import HeaderButton from "../Header/HeaderButton";
import styles from "./Todos.module.css";
import { ITodoProps } from "./types";

const buttonStyles = {
  marginRight: "5px",
};

const Todo: FC<ITodoProps> = ({ number, deleteTodo, todo, toggleTodo }) => {
  const { title, body, id, completed } = todo;

  const navigate = useNavigate();

  return (
    <div
      className={styles.todos}
      style={{ backgroundColor: completed ? "gainsboro" : "transparent" }}
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
          onClick={() => deleteTodo(id)}
        >
          Delete
        </HeaderButton>
        <HeaderButton
          onClick={() => toggleTodo(id)}
          buttonStyles={buttonStyles}
        >
          Done
        </HeaderButton>
        <HeaderButton onClick={() => navigate("/details", { state: todo })}>
          Details
        </HeaderButton>
      </div>
    </div>
  );
};

export default Todo;
