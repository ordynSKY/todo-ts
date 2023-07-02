export interface ISidebar {
  filterTodos: (e: string) => void;
  onCompletedTodo: (e: string) => void;
  saveTodos: () => void;
}

export interface ISearch {
  filterTodos: (e: string) => void;
}
