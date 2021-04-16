import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const AdminSidebar = () => {
  let { url } = useRouteMatch();

  return (
    <div className='sidebar'>
      <ul>
        <li id='logo'>iRepair</li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to={`${url}/order-list?name=admin`}>Order list</Link>
        </li>
        <li>
          <Link to={`${url}/add-service?name=admin`}>Add service</Link>
        </li>
        <li>
          <Link to={`${url}/make-admin?name=admin`}>Make admin</Link>
        </li>
        <li>
          <Link to={`${url}/manage-service?name=admin`}>Manage service</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
