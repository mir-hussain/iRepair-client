import React, { useContext } from "react";
//css
import "./Login.css";
//react-router-dom
import { useHistory, useLocation } from "react-router";
//user context
import { UserContext } from "../App/App";
//firebase data
import { initializeFirebase, handleGoogleSignIn } from "./Firebase";

initializeFirebase();

const Login = () => {
  const [user, setUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleResponse = (res, redirect) => {
    setUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  ////google sign in

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  return (
    <section className='login-section'>
      <div className='login-card'>
        <h1 className='login-tile'>Login</h1>
        <button className='primary-btn' onClick={googleSignIn}>
          Login With Google
        </button>
      </div>
    </section>
  );
};

export default Login;
