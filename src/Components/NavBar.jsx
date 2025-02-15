import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addToDo">Add ToDo</Link>
        </li>
        <li>
          <Link to="/updateStatus">Update Status</Link>
        </li>
        <li>
          <Link to="/view">View My ToDos</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
