import { useCallback, useEffect, useState } from "react";
import { fetchTodos, setTodos } from "../../services/TodoService";
import { ITodo } from "../../types/types";
import Header from "../Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import TodosList from "./TodosList";
import debounce from "lodash.debounce";

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
      } catch (e: any) {
        console.log(e.response?.data?.message);
      }
    };
    onSetTodos();
  }, [todosArray, firstStart]);

  const oneNewTodo = (todo: ITodo) => {
    setTodosArray((prev) => [...(prev || []), todo]);
  };

  const filterTodos = (searchText: string) => {
    const trimmeredText = searchText.trim();
    setSearchTodo(trimmeredText);
  };

  useEffect(() => {
    const arr = todosArray?.filter(({ title, completed }) => {
      const isCompleted =
        completedTodo === 0
          ? true
          : completedTodo === 1
          ? completed === true
          : completed === false;
      const isSearchedText = searchTodo
        ? title.toLowerCase().includes(searchTodo.toLowerCase())
        : true;

      return isCompleted && isSearchedText;
    });

    setSearchResult(arr);
  }, [completedTodo, searchTodo, todosArray]);

  const debouncedSearch = useCallback(
    debounce((val) => filterTodos(val), 500),
    []
  );

  debouncedSearch(searchTodo);

  const onCompletedTodo = (completed: number) => {
    if (completed === completedTodo) {
      setCompletedTodo(0);
    } else {
      setCompletedTodo(completed);
    }
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
          todosArray={
            (searchTodo || completedTodo) !== 0
              ? searchResult
              : todosArray || null
          }
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
        <div style={{ position: "absolute", right: 60, top: 50 }}>
          <Sidebar
            filterTodos={debouncedSearch}
            onCompletedTodo={onCompletedTodo}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
