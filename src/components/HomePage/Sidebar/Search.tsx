import React, { FC } from "react";
import { ISidebar } from "./types";

const Search: FC<ISidebar> = ({ filterTodos }) => {
  return (
    <div style={{ marginTop: 10 }}>
      <input
        type="text"
        placeholder="SEARCH"
        onChange={(e) => filterTodos(e.target.value)}
        style={{
          width: 200,
          height: 35,
          border: "1px solid black",
          borderRadius: 10,
          padding: 5,
        }}
      />
      {/* <button
        style={{
          position: "absolute",
          border: 0,
          background: "transparent",
          borderRadius: 10,
          cursor: "pointer",
          height: 35,
          right: 10,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
        </svg>
      </button> */}
    </div>
  );
};

export default Search;
