export interface ISidebar {
  filterTodos: (e: string) => void;
  onCompletedTodo: (e: number) => void;
}

export interface ISearch {
  filterTodos: (e: string) => void;
}
