import React, { FC } from "react";
import styles from "./Header.module.css";
import { IHeaderButtonProps } from "./types";

const HeaderButton: FC<IHeaderButtonProps> = ({
  isDisabled,
  onClick,
  children,
  buttonStyles,
}) => {
  return (
    <button
      disabled={isDisabled}
      className={styles.button}
      onClick={onClick}
      style={buttonStyles}
    >
      {children}
    </button>
  );
};

export default HeaderButton;
