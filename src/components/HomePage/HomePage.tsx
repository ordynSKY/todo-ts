import { useEffect, useState } from "react";
import { fetchTodos, setTodos } from "../../services/TodoService";
import { ITodo } from "../../types/types";
import Header from "../Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import TodosList from "./TodosList";

const HomePage = () => {
  const [todosArray, setTodosArray] = useState<ITodo[] | null | undefined>(
    null
  );

  const [firstStart, setFirstStart] = useState<boolean>(true);

  const [searchTodo, setSearchTodo] = useState<string>("");

  const [searchResult, setSearchResult] = useState<ITodo[] | null | undefined>(
    null
  );

  const [completedTodo, setCompletedTodo] = useState<number>(0);

  const deleteTodo = (id: number) => {
    setTodosArray((todos) => todos?.filter((el) => el.id !== id) || null);
  };

  useEffect(() => {
    const onTodos = async () => {
      try {
        const response = await fetchTodos();
        // localStorage.setItem("todos", JSON.stringify(response));
        setTodosArray(response.data.todos);
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

  const filterTodos = (searchText: string) => {
    const trimmeredText = searchText.trim();
    setSearchTodo(trimmeredText);
    console.log("step1: ", trimmeredText, todosArray);
    if (!trimmeredText) {
      console.log("step2: ", !trimmeredText);
      return todosArray;
    }

    const arr = todosArray?.filter(({ title }) => {
      console.log(
        "step3: ",
        title.toLowerCase().includes(trimmeredText.toLowerCase())
      );
      return title.toLowerCase().includes(trimmeredText.toLowerCase());
    });
    console.log("result: ", searchResult, trimmeredText);
    setSearchResult(arr);
  };

  const onFilter = () => {
    const filteredTodos = filterTodos(searchTodo);

    return filteredTodos;
  };

  return (
    <>
      <Header oneNewTodo={oneNewTodo} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TodosList
          todosArray={searchTodo ? searchResult : todosArray || null}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
        <div style={{ position: "absolute", right: 60, top: 50 }}>
          <Sidebar filterTodos={filterTodos} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
