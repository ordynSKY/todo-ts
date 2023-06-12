import React, { useState } from "react";
import Header from "../Header/Header";
import Todo from "./Todo";
import TodosList from "./TodosList";

const HomePage = () => {
  const [todosArray, setTodosArray] = useState([
    { id: 1, title: "Title", body: "Description" },
    { id: 2, title: "Title", body: "Description" },
    { id: 3, title: "Title", body: "Description" },
  ]);
  return (
    <>
      <Header todosArray={todosArray} setTodosArray={setTodosArray} />
      <TodosList todosArray={todosArray} />
    </>
  );
};

export default HomePage;
