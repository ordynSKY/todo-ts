import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "../../components/TodoComponents/Todos.module.css";
import { fetchTodos } from "../../services/TodoService";
import { ITodo } from "../../types/types";

const Details = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const onTodos = async () => {
      const todoId = Number(id);

      const response = await fetchTodos();

      setTodo(
        response.data.todos?.filter((todo: ITodo) => todo.id === todoId)[0]
      );
    };

    onTodos();
  }, [id]);

  return (
    <div>
      <Header />
      <div
        style={{ marginTop: 20, marginLeft: 50, cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      >
        Go back ←
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginTop: 20 }}>Details</h1>
        <div className={styles.todos} style={{ width: 800 }}>
          <div>
            To do ID: <strong>{id}</strong>
            <br />
            Todo title: <strong>{todo?.title}</strong>
            <br />
            Todo description: <strong>{todo?.body}</strong>
            <br />
            Completed:{" "}
            <strong>{todo?.completed ? "Completed" : "Not completed"}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
