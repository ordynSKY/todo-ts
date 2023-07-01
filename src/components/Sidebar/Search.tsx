import React, { FC } from "react";
import { ISearch } from "./types";

const Search: FC<ISearch> = ({ filterTodos }) => {
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
    </div>
  );
};

export default Search;
