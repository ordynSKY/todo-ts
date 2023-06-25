import React, { FC } from "react";
import TodoForm from "../HomePage/TodoForm";
import { IHeader } from "./types";
import styles from "./Header.module.css";
import { logout } from "../../services/AuthService";

const Header: FC<IHeader> = ({ oneNewTodo }) => {
  const onLogout = async () => {
    try {
      const response = await logout();
      localStorage.removeItem("token");
      window.location.replace("/");
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>TODO</div>
        <nav>
          <button className={styles.logoutButton} onClick={() => onLogout()}>
            Logout
          </button>
        </nav>
      </div>
      <TodoForm oneNewTodo={oneNewTodo} />
    </>
  );
};

export default Header;
