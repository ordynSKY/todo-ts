import React, { FC } from "react";
import styles from "./Header.module.css";
import { IHeaderInputProps } from "./types";

const HeaderInput: FC<IHeaderInputProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default HeaderInput;
