import { get } from "http";
import React, { FC, FormEvent, useState } from "react";
import styles from "./Header.module.css";
import { IHeaderInputProps } from "./types";

const HeaderInput: FC<IHeaderInputProps> = ({
  value,
  placeholder,
  getValues,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => getValues(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default HeaderInput;
