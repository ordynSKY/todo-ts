import { useEffect, useState } from "react";
import { getItem, setItem } from "../../localStorageService";
import { ITodo } from "../../types/types";
import Header from "../Header/Header";
import TodosList from "./TodosList";

const HomePage = () => {
  const [todosArray, setTodosArray] = useState<ITodo[] | null>(null);
  const [firstStart, setFirstStart] = useState(true);

  const deleteTodo = (id: number) => {
    setTodosArray((todos) => todos?.filter((el) => el.id !== id) || null);
  };

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
    if (firstStart) {
      setFirstStart(false);
      return;
    }
    setItem("todos", JSON.stringify(todosArray));
    console.log("arr: ", todosArray);
  }, [todosArray, firstStart]);

  useEffect(() => {
    if (!getItem("todos")) return;
    setTodosArray(getItem("todos"));
  }, []);

  const oneNewTodo = (todo: ITodo) => {
    setTodosArray((prev) => [...(prev || []), todo]);
  };

  return (
    <>
      <Header oneNewTodo={oneNewTodo} />
      <TodosList
        todosArray={todosArray}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
};

export default HomePage;
