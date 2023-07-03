import { AxiosResponse } from "axios";
import $api from "../http";
import { ITodo, TTodoArray } from "../types/types";

const fetchTodos = (): Promise<AxiosResponse<any>> => {
  return $api.get<TTodoArray>(`${process.env.REACT_APP_TODO_BASE_URL}/todos`);
};

const setTodos = async (
  todos: TTodoArray
): Promise<AxiosResponse<any, any>> => {
  return $api.post<any>(
    `${process.env.REACT_APP_TODO_BASE_URL}/todos`,
    { todos } || { todos: [] }
  );
};

export { fetchTodos, setTodos };
