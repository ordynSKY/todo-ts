import { AxiosResponse } from "axios";
import $api from "../http";
import { ITodo } from "../types/types";

const fetchTodos = (): Promise<AxiosResponse<any>> => {
  return $api.get<ITodo[]>(`${process.env.REACT_APP_TODO_BASE_URL}/todos`);
};

export default fetchTodos;
