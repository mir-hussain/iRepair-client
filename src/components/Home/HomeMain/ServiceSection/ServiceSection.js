import React from "react";
import "./ServiceSection.css";
import serviceData from "./ServiceData";

const ServiceSection = () => {
  return (
    <section className='service-section'>
      <div className='service-section-title'>
        <h1>
          <span> Services </span> that we provide.
        </h1>
        <p>
          We provide various computer repair services and solutions for our new and regular customers. <br /> Feel free to find out more below.
        </p>
      </div>
      <div className='service-cards-container'>
        {serviceData.map((data) => (
          <Card key={data.image} data={data} />
        ))}
      </div>
      <button className='primary-btn service-section-btn'>More </button>
    </section>
  );
};

const Card = ({ data }) => {
  const { title, description, price, image } = data;
  return (
    <div className='service-card'>
      <div className='service-card-image'>
        <img src={image} alt='' />
      </div>
      <div className='service-card-text'>
        <h1>{title}</h1>
        <p>{description}</p>
        <p className='text-cyan'>Price: {price} Tk.</p>
      </div>
    </div>
  );
};

export default ServiceSection;
