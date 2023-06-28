import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "../components/HomePage/Todos.module.css";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { id, title, body, completed } = location.state;

  return (
    <div>
      <Header />
      <div
        style={{ marginTop: 20, marginLeft: 50, cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      >
        Go back ←
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginTop: 20 }}>Details</h1>
        <div className={styles.todos} style={{ width: 800 }}>
          <div>
            To do ID: <strong>{id}</strong>
            <br />
            Todo title: <strong>{title}</strong>
            <br />
            Todo description: <strong>{body}</strong>
            <br />
            Completed: <strong>{completed.toString()}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
