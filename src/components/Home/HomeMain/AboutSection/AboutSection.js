import React from "react";
import "./AboutSection.css";
import macbook from "../../../../image/macbook.jpg";

const AboutSection = () => {
  return (
    <section className='about-section'>
      <div className='about-image'>
        <img src={macbook} alt='' />
      </div>
      <div className='about-text-area'>
        <div className='about-text'>
          <div className='about-title'>
            <h1>
              Who we are <br /> and How we Work
            </h1>
            <p className='text-gray'>
              <span>iRepair </span> is one of the leading computer repair companies in the <span> Bangladesh </span> providing services for individuals and businesses. No matter what kind of Macbook
              you have, <span> we can fix it. </span>
            </p>
          </div>
          <div className='accomplishment'>
            <div>
              <h2>98%</h2>
              <p className='text-gray'>Successful repairs</p>
            </div>
            <div>
              <h2>2k</h2>
              <p className='text-gray'>Excellent reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
