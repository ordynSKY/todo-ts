import React, { FC, FormEvent, useState } from "react";
import HeaderButton from "../Header/HeaderButton";
import HeaderInput from "../Header/HeaderInput";
import styles from "../Header/Header.module.css";
import { IHeader } from "../Header/types";
import { ITodo } from "../../types/types";

const TodoForm: FC<IHeader> = ({ oneNewTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!body || !title) return;
    const newTodo: ITodo = {
      id: Date.now(),
      title,
      body,
      completed: false,
    };
    oneNewTodo(newTodo);
    setTitle("");
    setBody("");
  };

  return (
    <form className={styles.form} onSubmit={addNewTodo}>
      <div className={styles.header}>
        <HeaderInput
          value={title}
          placeholder="Type to do title"
          getValues={(val) => setTitle(val)}
        />
        <HeaderInput
          value={body}
          placeholder="Type to do description"
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
