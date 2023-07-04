import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchTodos, setTodos } from "../../services/TodoService";
import { ITodo, TTodoArray } from "../../types/types";
import HeaderForm from "../../components/Header/HeaderForm";
import Sidebar from "../../components/Sidebar/Sidebar";
import TodosList from "../../components/TodoComponents/TodosList";
import { toast } from "react-toastify";
import useDebounce from "../../utils/useDebounce";
import { handleErrorUtil } from "../../utils/handleErrorUtil/handleErrorUtil";

const HomePage = () => {
  const [todosArray, setTodosArray] = useState<TTodoArray>(null);

  const [searchTodo, setSearchTodo] = useState<string>("");

  const [completedTodo, setCompletedTodo] = useState<string>("all");

  const isFiltered = !!searchTodo && completedTodo !== "all";

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

  const oneNewTodo = (todo: ITodo) => {
    setTodosArray((prev) => [...(prev || []), todo]);
  };

  const filterTodos = (searchText: string) => {
    setSearchTodo(searchText.trim());
  };

  const debouncedSearch = useCallback(
    useDebounce((val: any) => filterTodos(val), 2000),
    []
  );

  const onCompletedTodo = (completed: string) => {
    if (completed === completedTodo) {
      setCompletedTodo("all");

      return;
    }

    setCompletedTodo(completed);
  };

  const saveTodos = () => {
    if (typeof todosArray === null) {
      return;
    }
    const onSetTodos = async () => {
      try {
        await setTodos(todosArray);

        toast.success("Todos successfully saved", { position: "bottom-right" });
      } catch (e: any) {
        handleErrorUtil(e);
        console.log(e);
      }
    };
    onSetTodos();
  };

  useEffect(() => {
    const onTodos = async () => {
      try {
        const response = await fetchTodos();

        setTodosArray(response.data.todos);
      } catch (e: any) {
        handleErrorUtil(e);
        console.log(e);
      }
    };
    onTodos();
  }, []);

  const searchResult = useMemo(() => {
    return todosArray?.filter(({ title, completed }) => {
      const searchTolowerCase = searchTodo.toLowerCase();

      const isCompleted =
        completedTodo === "all"
          ? true
          : completedTodo === "completed"
          ? completed === true
          : completed === false;

      const isSearchedText = searchTodo
        ? title.toLowerCase().includes(searchTolowerCase)
        : true;

      return isCompleted && isSearchedText;
    });
  }, [completedTodo, searchTodo, todosArray]);

  return (
    <>
      <HeaderForm oneNewTodo={oneNewTodo} todosLength={todosArray?.length} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TodosList
          todosArray={searchResult || []}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          isFiltered={isFiltered}
          setTodosArray={setTodosArray}
        />
        <div style={{ position: "absolute", right: 60, top: 50 }}>
          <Sidebar
            filterTodos={debouncedSearch}
            onCompletedTodo={onCompletedTodo}
            saveTodos={saveTodos}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
