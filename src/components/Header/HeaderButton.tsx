import React, { FC } from "react";
import { IHeaderButtonProps } from "../../types";
import styles from "./Header.module.css";

const HeaderButton: FC<IHeaderButtonProps> = ({
  isDisabled,
  addNewTodo,
  children,
}) => {
  return (
    <div>
      <button
        disabled={isDisabled}
        className={styles.button}
        onClick={addNewTodo}
      >
        {children}
      </button>
    </div>
  );
};

export default HeaderButton;
