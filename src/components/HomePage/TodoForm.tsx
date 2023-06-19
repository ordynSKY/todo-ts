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
    const newTodo: ITodo = {
      id: Date.now(),
      title,
      body,
    };
    oneNewTodo(newTodo);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={addNewTodo}>
      <div className={styles.header}>
        <HeaderInput
          value={title}
          placeholder="Type todo's title"
          getValues={(val) => setTitle(val)}
        />
        <HeaderInput
          value={body}
          placeholder="Type todo's description"
          getValues={(val) => setBody(val)}
        />
        <HeaderButton isDisabled={false} onClick={addNewTodo}>
          ADD TODO
        </HeaderButton>
      </div>
    </form>
  );
};

export default TodoForm;
