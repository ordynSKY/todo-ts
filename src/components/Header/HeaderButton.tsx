import React, { FC } from "react";
import { IHeaderButtonProps } from "../../types";
import styles from "./Header.module.css";

const HeaderButton: FC<IHeaderButtonProps> = ({
  isDisabled,
  onClick,
  children,
  buttonStyles,
}) => {
  return (
    <div>
      <button
        disabled={isDisabled}
        className={styles.button}
        onClick={onClick}
        style={buttonStyles}
      >
        {children}
      </button>
    </div>
  );
};

export default HeaderButton;
