import React, { useEffect, useState } from "react";
import { getItem } from "../../localStorageService";
import { IObjTodo, IObjTodos } from "../../types/types";
import Header from "../Header/Header";
import Todo from "./Todo";
import TodosList from "./TodosList";

const HomePage = () => {
  const [todosArray, setTodosArray] = useState<IObjTodos[]>([]);
  const [todo, setTodo] = useState<IObjTodo>({
    title: "",
    body: "",
    completed: false,
  });
  const [firstStart, setFirstStart] = useState(true);

  const deleteTodo = (id: number) => {
    setTodosArray(todosArray.filter((el: IObjTodos) => el.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodosArray((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    if (firstStart) {
      setFirstStart(false);
    } else {
      localStorage.setItem("todos", JSON.stringify(todosArray));
    }
  }, [todosArray]);

  useEffect(() => {
    if (getItem("todos")) {
      const storage = getItem("todos");
      setTodosArray(storage);
    }
  }, []);

  return (
    <>
      <Header
        todosArray={todosArray}
        setTodosArray={setTodosArray}
        todo={todo}
        setTodo={setTodo}
      />
      <TodosList
        todosArray={todosArray}
        todo={todo}
        setTodo={setTodo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
};

export default HomePage;
