export interface ITodo {
  id: number;
  title: string;
  body: string;
  completed: boolean;
}
export type TOnClick = (o?: any) => void;
