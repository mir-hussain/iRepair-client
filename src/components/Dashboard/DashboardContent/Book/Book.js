import React, { useContext } from "react";
import { UserContext } from "../../../App/App";
import { useForm } from "react-hook-form";

const Book = (data) => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  const { name, email, selectedService } = user;
  const serviceName = selectedService.name;
  // const info = {};
  const { register, handleSubmit, errors } = useForm();

  // const handleBlur = (event) => {
  //   console.log(event.target.value);
  //   console.log(event.target.name);
  // };

  const onSubmit = () => {
    const bookingDetails = { name, email, selectedService };

    fetch("http://localhost:5000/addBooking", {
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
    <div>
      <form className='shipment-form' onSubmit={handleSubmit(onSubmit)}>
        <input name='name' defaultValue={name} ref={register({ required: true })} placeholder='Your Name' />
        {errors.name && <span className='error'>Name is required</span>}

        <input name='email' defaultValue={email} ref={register({ required: true })} placeholder='Your Email' />
        {errors.email && <span className='error'>Email is required</span>}

        <input name='service' defaultValue={serviceName} disabled ref={register({ required: true })} placeholder='Service name' />
        {errors.service && <span className='error'>Service is required</span>}

        {/* <input onBlur={handleBlur} name='address' ref={register({ required: true })} placeholder='Your Address' />
        {errors.address && <span className='error'>Address is required</span>}

        <input onBlur={handleBlur} name='phone' ref={register({ required: true })} placeholder='Your Phone Number' />
        {errors.phone && <span className='error'>Phone Number is required</span>} */}

        <input type='submit' />
      </form>
    </div>
  );
};

export default Book;
