import axios from "axios";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => setServices(res.data));
  }, []);
  return (
    <div>
      <h1>This is services</h1>
      {services.map((service) => (
        <Card key={service.key} service={service} />
      ))}
    </div>
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

export default Services;
