import { useEffect, useState } from "react";
import { getItem, setItem } from "../../localStorageService";
import { ITodo } from "../../types/types";
import Header from "../Header/Header";
import TodosList from "./TodosList";

const HomePage = () => {
  const [todosArray, setTodosArray] = useState<ITodo[] | null | undefined>(
    null
  );
  // избавиться от переменной
  const [todo, setTodo] = useState<ITodo>({
    title: "",
    body: "",
    completed: false,
  });
  const [firstStart, setFirstStart] = useState(true);

  const deleteTodo = (id: number) => {
    // опираться на предыдущее значение в колбеке
    setTodosArray(todosArray?.filter((el) => el.id !== id));
  };

  const toggleTodo = (oneTodo: ITodo) => {
    setTodosArray((prevTodos) =>
      prevTodos?.map((todo) =>
        typeof todo?.id === "number" && todo?.id === oneTodo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  useEffect(() => {
    if (firstStart) {
      setFirstStart(false);
      return;
    }
    setItem("todos", JSON.stringify(todosArray));
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
        todo={todo}
        setTodo={setTodo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
};

export default HomePage;
