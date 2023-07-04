export interface ITodo {
  id: number;
  title: string;
  body: string;
  completed: boolean;
  position: number | undefined;
}

export type TTodoArray = ITodo[] | null | undefined;
