import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const queryName = query.get("name");
  let hide = { display: "block" };
  if (queryName === "dashboard" || queryName === "admin") {
    hide = { display: "none" };
  }

  return (
    <nav style={hide}>
      <ul>
        <li id='logo'>iRepair</li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/admin?name=admin'>Admin</Link>
        </li>
        <li>
          <Link to='/dashboard/book?name=dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/login'>Log in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
