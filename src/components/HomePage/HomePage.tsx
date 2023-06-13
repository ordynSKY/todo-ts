import React, { useState } from "react";
import { objTodo } from "../../types";
import Header from "../Header/Header";
import Todo from "./Todo";
import TodosList from "./TodosList";

const HomePage = () => {
  const [todosArray, setTodosArray] = useState([
    { id: 1, title: "Title", body: "Description" },
    { id: 2, title: "Title", body: "Description" },
    { id: 3, title: "Title", body: "Description" },
  ]);
  const [todo, setTodo] = useState({ title: "", body: "" });

  const deleteTodo = () => {
    // setTodosArray(todosArray.filter(el => el.id !== todo.id))
  };

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
      />
    </>
  );
};

export default HomePage;
