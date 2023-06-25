import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getItem, setItem } from "../../localStorageService";
import { fetchTodos, setTodos } from "../../services/TodoService";
import { ITodo } from "../../types/types";
import Header from "../Header/Header";
import TodosList from "./TodosList";

const HomePage = () => {
  const [todosArray, setTodosArray] = useState<ITodo[] | null>(null);
  const [firstStart, setFirstStart] = useState(true);

  const deleteTodo = (id: number) => {
    setTodosArray((todos) => todos?.filter((el) => el.id !== id) || null);
  };

  useEffect(() => {
    const onTodos = async () => {
      try {
        const response = await fetchTodos();
        // localStorage.setItem("todos", JSON.stringify(response));
        setTodosArray(response.data.todos);
        console.log("redirect: ", response.data.todos);
      } catch (e: any) {
        console.log(e.response?.data?.message);
        window.location.replace("/");
      }
    };
    onTodos();
  }, []);

  const toggleTodo = (id: number) => {
    setTodosArray(
      (prevTodos) =>
        prevTodos?.map((todo) =>
          typeof todo?.id === "number" && todo?.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
        ) || null
    );
  };

  useEffect(() => {
    if (firstStart || typeof todosArray === null) {
      setFirstStart(false);
      return;
    }
    const onSetTodos = async () => {
      try {
        const response = await setTodos(todosArray);
        console.log("set todos: ", response.data.todos);
      } catch (e: any) {
        console.log(e.response?.data?.message);
        // window.location.replace("/");
      }
    };
    onSetTodos();
  }, [todosArray, firstStart]);

  // useEffect(() => {
  //   if (!getItem("todos")) return;
  //   setTodosArray(getItem("todos"));
  // }, []);

  const oneNewTodo = (todo: ITodo) => {
    setTodosArray((prev) => [...(prev || []), todo]);
  };

  return (
    <>
      <Header oneNewTodo={oneNewTodo} />
      <TodosList
        todosArray={todosArray || null}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
};

export default HomePage;
