import React, { createContext, useContext, useState } from "react";
import { UserContext } from "../../../App/App";
import { useForm } from "react-hook-form";
import ProcessPayment from "./Payment/ProcessPayment";
import "./Book.css";

export const PaymentContext = createContext();

const Book = (data) => {
  const [user, setUser] = useContext(UserContext);
  const [payment, setPayment] = useState(false);
  const { name, email, selectedService } = user;
  const serviceName = selectedService.name;
  const servicePrice = selectedService.price;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    const bookingDetails = { name, email, selectedService };

    fetch("https://irepairserver.herokuapp.com/addBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("your service is booked successfully");
        }
      });
  };

  return (
    <PaymentContext.Provider value={[payment, setPayment]}>
      <div className='booking-section'>
        <form className='booking-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='input-field'>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' defaultValue={name} ref={register({ required: true })} placeholder='Your Name' />
            {errors.name && <span className='error'>Name is required</span>}
          </div>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' defaultValue={email} ref={register({ required: true })} placeholder='Your Email' />
            {errors.email && <span className='error'>Email is required</span>}
          </div>
          <div className='input-field'>
            <label htmlFor='service-name'>Service name</label>
            <input id='service-name' name='service' defaultValue={serviceName} disabled ref={register({ required: true })} placeholder='Service name' />
            {errors.service && <span className='error'>Service is required</span>}
          </div>
          <div className='input-field'>
            <label htmlFor='service-price'>Service price</label>
            <input id='servie-price' name='service' defaultValue={servicePrice} disabled ref={register({ required: true })} placeholder='Service Price' />
            {errors.service && <span className='error'>Service is required</span>}
          </div>
          {payment ? <input className='primary-btn book-btn' value='Book Now' type='submit' /> : <input className='primary-btn book-btn' value='Book Now' type='submit' disabled />}
        </form>
        <div className='payment-container'>
          <ProcessPayment />
        </div>
      </div>
    </PaymentContext.Provider>
  );
};

export default Book;
