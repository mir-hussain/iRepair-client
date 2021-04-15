import React from "react";
import "./HomeHeader.css";
import macbook from "../../../image/macbook-open-small2.jpg";

const HomeHeader = () => {
  return (
    <div className='home-header'>
      <div className='header-text-area'>
        <div className='header-text'>
          <h1>
            Don't worry. <span> We'll fix it. </span>
          </h1>
          <p>
            Welcome to <span>iRepair</span>, your one-stop place for all kinds of <span> Macbook repairs </span> and diagnostics.
          </p>
          <button className='primary-btn'>view all services</button>
        </div>
      </div>
      <div className='header-image'>
        <img src={macbook} alt='' />
      </div>
    </div>
  );
};

export default HomeHeader;
