import React, { FC, FormEvent, useState } from "react";
import HeaderButton from "../Header/HeaderButton";
import HeaderInput from "../Header/HeaderInput";
import styles from "../Header/Header.module.css";
import { IHeader } from "../Header/types";
import { ITodo } from "../../types/types";

const TodoForm: FC<IHeader> = ({ oneNewTodo }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!body || !title) return;
    const newTodo = {
      id: Date.now(),
      title,
      body,
    };
    oneNewTodo(newTodo);
    setTitle("");
    setBody("");
  };

  const getValues = () => {};

  return (
    <form action="" onSubmit={addNewTodo}>
      <div className={styles.header}>
        <HeaderInput
          value={title}
          placeholder="Type todo's title"
          getValues={getValues}
        />
        <HeaderInput
          value={body}
          placeholder="Type todo's description"
          getValues={getValues}
        />
        <HeaderButton isDisabled={false} onClick={addNewTodo}>
          ADD TODO
        </HeaderButton>
      </div>
    </form>
  );
};

export default TodoForm;
