import React, { useContext, useEffect, useState } from "react";
import "./ServiceSection.css";
import axios from "axios";
import { UserContext } from "../../../App/App";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  const [user, setUser] = useContext(UserContext);

  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => setServices(res.data));
  }, []);

  const handleAddService = (event) => {
    const serviceName = event.target.innerText;

    const clickedService = services.find((service) => service.name === serviceName);

    const newUser = { ...user };
    newUser.selectedService = clickedService;
    newUser.selectedService.status = "pending";
    setUser(newUser);
  };

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
          <Card key={service.key} handleAddService={handleAddService} service={service} />
        ))}
      </div>
      <button className='primary-btn service-section-btn'>More </button>
    </section>
  );
};

const Card = ({ service, handleAddService }) => {
  const { name, description, price, imageURL } = service;
  // const [user, setUser] = useContext(UserContext);

  // const handleAddService = (event) => {
  //   const serviceName = event.target.innerText;
  //   const newUser = { ...user };
  //   newUser.service = serviceName;
  //   setUser(newUser);
  // };
  return (
    <div className='service-card'>
      <div className='service-card-image'>
        <img src={imageURL} alt='' />
      </div>
      <div className='service-card-text'>
        <h1>
          <Link onClick={handleAddService} to='/dashboard/book?name=dashboard'>
            {name}
          </Link>
        </h1>
        <p>{description}</p>
        <p className='text-cyan'>Price: {price} Tk.</p>
      </div>
    </div>
  );
};

export default ServiceSection;
