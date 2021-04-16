import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  let { url } = useRouteMatch();
  return (
    <div className='sidebar'>
      <ul>
        <li id='logo'>iRepair</li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to={`${url}/book?name=dashboard`}>Book</Link>
        </li>
        <li>
          <Link to={`${url}/booking-list?name=dashboard`}>Booking List</Link>
        </li>
        <li>
          <Link to={`${url}/review?name=dashboard`}>Review</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
