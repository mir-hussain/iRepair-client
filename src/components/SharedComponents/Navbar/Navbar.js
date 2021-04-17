import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import firebase from "firebase/app";
import { UserContext } from "../../App/App";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const email = user.email;

  // to get admin list

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admins").then((res) => setAdmins(res.data));
  }, []);

  const emailList = admins.map((admin) => admin.email);
  const isAdmin = emailList.includes(email);
  // to get query name from router

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const queryName = query.get("name");
  let hide = { display: "block" };
  if (queryName === "dashboard" || queryName === "admin") {
    hide = { display: "none" };
  }

  // to log out

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    let currentUser = { ...user };
    currentUser = {};
    setUser(currentUser);
  };

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
        {isAdmin && (
          <li>
            <Link to='/admin?name=admin'>Admin</Link>
          </li>
        )}

        <li>
          <Link to='/dashboard/book?name=dashboard'>Dashboard</Link>
        </li>
        {user.email ? (
          <li>
            <button id='logout-btn' onClick={signOut}>
              Log out
            </button>
          </li>
        ) : (
          <li>
            <Link to='/login'>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
