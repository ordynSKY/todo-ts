import React, { FC } from "react";
import { IHeaderInputProps } from "../../types";
import styles from "./Header.module.css";

const HeaderInput: FC<IHeaderInputProps> = ({
  inputValue,
  setInputValue,
  placeholder,
}) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default HeaderInput;
