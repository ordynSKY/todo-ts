import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/AuthService";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const onLogout = async () => {
    try {
      const response = await logout();
      localStorage.removeItem("token");
      navigate("/");
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
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
