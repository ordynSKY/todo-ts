import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchTodos, setTodos } from "../../services/TodoService";
import { ITodo } from "../../types/types";
import HeaderForm from "../../components/Header/HeaderForm";
import Sidebar from "../../components/Sidebar/Sidebar";
import TodosList from "../../components/TodoComponents/TodosList";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/*
 ВЫПОЛНЕНО - 1) Избавься от этого firstStart флоу. Или сделай кнопку "Save Todos", или пользуйся функцией сохраняшкой, которая будет
     отправлять на мервер тудухи когда надо, а не в useEffect.
     Можешь убрать коллбэки в setTodosArray или пользваться todosArray, но не мутируй напрямую.

 ВЫПОЛНЕНО - 2) SearchResult переменную с её useEffect поменяй на useMemo.

 ВЫПОЛНЕНО - 3) Структурируй код как-то, у тебя методы, потом useEffect, потом методы, потом useEffect. useEffect-ы держи вместе, методы тоже и  т.п.
    Разделяй код переносом строки, разделяй функци, разделяй что написано внутри функций по логическим блокам, чтобы это не было кашей.

 ВЫПОЛНЕНО - 4) У тебя приложение не работает, если нет тудух в базе данных. Попробуй без них залогиниться.

 ВЫПОЛНЕНО - 5) У тебя HomePage - страница, а лежит в компонентах, а не в pages

 ВЫПОЛНЕНО - 6) completedTodo флоу непонятный. Какие-то цифры. Есть же слова, пользуйся словами, чтобы понятнее было.
    Сделай какой-то completedTodoFilter и впиши туда 'completed' | 'not-completed' | 'all' или что-то подобное.
    Будет значительно проще понять что происходит, потому что туда добавится ещё несколько фильтров, типа "Has Description"
    и тебе придётся добавлять ещё одну цифру, а потом ещё одну, а там поди запомни какая цифра что означает.

 ВЫПОЛНЕНО - 7) Пользуйся return в if вместо else. Потом приложения станую больше и в else появятся ещё условия, а в них ещё и ты
    получишь ад из вложенных друг в друга if {} else if {} else. Потом появится баг и ты охренеешь искать его там.

 ВЫПОЛНЕНО - 8) сделай errorHandler и юзай его в catch(), чтобы приложение реагировало на ошибки.
*/

const HomePage = () => {
  //states

  const [todosArray, setTodosArray] = useState<ITodo[] | null | undefined>(
    null
  );

  const [searchTodo, setSearchTodo] = useState<string>("");

  const [completedTodo, setCompletedTodo] = useState<string>("all");

  //getting useNavigate()

  const navigate = useNavigate();

  //functions

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

  // ! сделай руками или хук скопируй в инете и юзай. Не ставь зависимость только ради дебаунса.
  const debouncedSearch = useCallback(
    debounce((val) => filterTodos(val), 500),
    []
  );

  const onCompletedTodo = (completed: string) => {
    if (completed === completedTodo) {
      setCompletedTodo("all");

      return;
      // ВЫПОЛНЕНО - ! return вместо else?
    }

    setCompletedTodo(completed);
  };

  //useEffects

  useEffect(() => {
    const onTodos = async () => {
      try {
        const response = await fetchTodos();

        setTodosArray(response.data.todos);
      } catch (e: any) {
        console.log(e);
      }
    };
    onTodos();
  }, []);

  //ВЫПОЛНЕНО - ! вместо всего этого useEffect и переменной searchResult нужно сделать один или два useMemo (как больше нравится)

  const searchResult = useMemo(() => {
    return todosArray?.filter(({ title, completed }) => {
      //ВЫПОЛНЕНО - ! ебац, я не понимать ничего. Это точно надо переписать на что-то адекватное
      const searchTolowerCase = searchTodo.toLowerCase();

      const isCompleted =
        completedTodo === "all"
          ? true
          : completedTodo === "completed"
          ? completed === true
          : completed === false;

      // ВЫПОЛНЕНО - ! тут ты на каждой итерации делаешь searchTodo.toLowerCase(), но searchTodo на всех итерациях одинаковое
      const isSearchedText = searchTodo
        ? title.toLowerCase().includes(searchTolowerCase)
        : true;

      return isCompleted && isSearchedText;
    });
  }, [completedTodo, searchTodo, todosArray]);

  const saveTodos = () => {
    if (typeof todosArray === null) {
      return;
    }
    const onSetTodos = async () => {
      try {
        await setTodos(todosArray);

        toast.success("Todos successfully saved", { position: "bottom-right" });
      } catch (e: any) {
        console.log(e);
      }
    };
    onSetTodos();
  };

  return (
    <>
      <HeaderForm oneNewTodo={oneNewTodo} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TodosList
          //ВЫПОЛНЕНО - ! эту историю тернарную тоже не надо, тут просто будет лежать значение из useMemo
          todosArray={searchResult || []}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
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
