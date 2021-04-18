import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  //to delete a selected service

  const deleteService = (id) => {
    fetch("https://irepairserver.herokuapp.com/deleteService/" + id, {
      method: "DELETE",
    }).then((res) => console.log(res));
  };

  //to load data from database

  useEffect(() => {
    fetch("https://irepairserver.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

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
