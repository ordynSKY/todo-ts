export type ITodoProps = {
  todo: {
    id: number;
    title: string;
    body: string;
  };
};
export type objTodo = {
  id: number;
  title: string;
  body: string;
};

export type IHeaderInputProps = {
  inputValue: string;
  setInputValue: Function;
  placeholder: string;
};
export type IHeaderButtonProps = {
  isDisabled: boolean;
  addNewTodo: AddNewTodo;
};
export type AddNewTodo = () => void;
export type ITodosListProps = {
  todosArray: objTodo[];
};
export type IHeader = {
  todosArray: objTodo[];
  setTodosArray: React.Dispatch<React.SetStateAction<objTodo[]>>;
};
