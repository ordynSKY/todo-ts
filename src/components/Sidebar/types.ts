export interface ISidebar {
  filterTodos: (e: string) => void;
  onCompletedTodo: (e: string) => void;
}

export interface ISearch {
  filterTodos: (e: string) => void;
}
