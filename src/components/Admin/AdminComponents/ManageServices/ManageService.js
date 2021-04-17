import React, { useEffect, useState } from "react";

//css
import "./ManageServices.css";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  //to delete a selected service

  const deleteService = (id) => {
    fetch("http://localhost:5000/deleteService/" + id, {
      method: "DELETE",
    }).then((res) => console.log(res));
  };

  //to load data from database

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className='service-list'>
      <div className='table-header'>
        <p>service name</p>
        <p>Price</p>
        <p>Action</p>
      </div>
      <div className='service-table-body'>
        {services.map((service) => (
          <Service deleteService={deleteService} key={service.key} service={service} />
        ))}
      </div>
    </div>
  );
};

//service information (row)

const Service = (props) => {
  const { name, price, _id } = props.service;
  return (
    <div className='table-body'>
      <p>{name}</p>
      <p>{price} $ </p>
      <button className='delete-btn' onClick={() => props.deleteService(_id)}>
        Delete
      </button>
    </div>
  );
};

export default ManageServices;
