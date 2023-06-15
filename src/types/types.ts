export interface IObjTodos {
  id: number;
  title: string;
  body: string;
}
export interface IObjTodo {
  title: string;
  body: string;
}

export type TOnClick = (o?: any) => void;
