import React, { FC } from "react";
import { IHeaderInputProps } from "../../types";
import styles from "./Header.module.css";

const HeaderInput: FC<IHeaderInputProps> = ({
  inputValue,
  setTodo,
  placeholder,
  todo,
  fieldName,
}) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) =>
          setTodo({ ...todo, [fieldName]: event.target.value })
        }
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default HeaderInput;
