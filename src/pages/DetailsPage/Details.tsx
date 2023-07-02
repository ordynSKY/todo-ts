import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "../../components/TodoComponents/Todos.module.css";
import { fetchTodos } from "../../services/TodoService";
import { ITodo } from "../../types/types";

/*
 ВЫПОЛНЕНО - 1) скопируй ссылку, открой новую вкладку и вставь. Приложение упадёт.
    У тебя в url тут должен быть айдишник тудухи, которую ты смотришь, чтобы ты мог скопировать ссылку и отправить другу,
    ведь в боевом проекте тут будет не туду, а товар.
    Ты заходишь на это страницу и запрашиваешь инфу о конкретном товаре.
    В твоём случе возможности получить одну штуку нет, но ты можешь сделать контекст или Redux/Mobx/Zustang и так далее,
    где будешь хранить массив тудух.
    Если ты сюда зашёл и массива нет, то его надо запросить, посмотреть в params и по id из params получить инфу о тудухе.
*/
const Details = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const onTodos = async () => {
      try {
        const todoId = Number(id);

        const response = await fetchTodos();

        setTodo(
          response.data.todos?.filter((todo: ITodo) => todo.id === todoId)[0]
        );
      } catch (e: any) {
        console.log(e);
      }
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
