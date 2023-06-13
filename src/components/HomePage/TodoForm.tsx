import React, { FC, useState } from "react";
import { IHeader } from "../../types";
import HeaderButton from "../Header/HeaderButton";
import HeaderInput from "../Header/HeaderInput";
import styles from "../Header/Header.module.css";

const TodoForm: FC<IHeader> = ({
  todosArray,
  setTodosArray,
  todo,
  setTodo,
}) => {
  const addNewTodo = () => {
    setTodosArray([...todosArray, { ...todo, id: Date.now() }]);
    setTodo({ title: "", body: "" });
  };

  return (
    <form action="" onClick={(e) => e.preventDefault()}>
      <div className={styles.header}>
        <HeaderInput
          todo={todo}
          inputValue={todo.title}
          setTodo={setTodo}
          fieldName="title"
          placeholder="Type todo's title"
        />
        <HeaderInput
          todo={todo}
          inputValue={todo.body}
          setTodo={setTodo}
          fieldName="body"
          placeholder="Type todo's description"
        />
        <HeaderButton isDisabled={false} onClick={addNewTodo}>
          ADD TODO
        </HeaderButton>
      </div>
    </form>
  );
};

export default TodoForm;
