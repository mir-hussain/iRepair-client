import React, { useEffect, useState } from "react";
import "./ServiceSection.css";
import axios from "axios";

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => setServices(res.data));
  }, []);
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
        {services.map((service) => (
          <Card key={service.key} service={service} />
        ))}
      </div>
      <button className='primary-btn service-section-btn'>More </button>
    </section>
  );
};

const Card = ({ service }) => {
  const { name, description, price, imageURL } = service;
  return (
    <div className='service-card'>
      <div className='service-card-image'>
        <img src={imageURL} alt='' />
      </div>
      <div className='service-card-text'>
        <h1>{name}</h1>
        <p>{description}</p>
        <p className='text-cyan'>Price: {price} Tk.</p>
      </div>
    </div>
  );
};

export default ServiceSection;
