import React, { FC } from "react";
import Search from "./Search";
import { ISidebar } from "./types";

const Sidebar: FC<ISidebar> = ({ filterTodos }) => {
  return (
    <div>
      <h1>SIBEDAR</h1>
      <Search filterTodos={filterTodos} />
      <button>Completed</button>
      <button>Not completed</button>
    </div>
  );
};

export default Sidebar;
