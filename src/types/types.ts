export interface IObjTodos {
  id: number;
  title: string;
  body: string;
  completed?: boolean;
}
export interface IObjTodo {
  title: string;
  body: string;
  id?: any;
  completed?: boolean;
}

export type TOnClick = (o?: any) => void;
