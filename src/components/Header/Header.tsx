import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/AuthService";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const onLogout = async () => {
    await logout();

    localStorage.removeItem("token");

    navigate("/");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>TODO</div>
      <nav>
        <button className={styles.logoutButton} onClick={() => onLogout()}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Header;
