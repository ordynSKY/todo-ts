import React, { FC, useState } from "react";
import { IHeader } from "../../types";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";
import HeaderInput from "./HeaderInput";

const Header: FC<IHeader> = ({ todosArray, setTodosArray }) => {
  const [title, setTitle] = useState("das");
  const [body, setBody] = useState("dgfg");

  const addNewTodo = () => {
    const newTodo = {
      id: Date.now(),
      title,
      body,
    };
    setTodosArray([...todosArray, newTodo]);
    console.log(newTodo);
  };

  return (
    <form action="" onClick={(e) => e.preventDefault()}>
      <div className={styles.header}>
        <HeaderInput
          inputValue={title}
          setInputValue={setTitle}
          placeholder="Type todo's title"
        />
        <HeaderInput
          inputValue={body}
          setInputValue={setBody}
          placeholder="Type todo's description"
        />
        <HeaderButton isDisabled={false} addNewTodo={addNewTodo} />
      </div>
    </form>
  );
};

export default Header;
