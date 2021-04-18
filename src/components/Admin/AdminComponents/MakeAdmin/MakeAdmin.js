import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const adminEmail = {
      email: data.email,
    };
    axios
      .post("https://irepairserver.herokuapp.com/addAdmin", adminEmail)
      .then((res) => {
        console.log(res);
        alert("E-mail Added");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='admin-section'>
      <form className='add-service-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='form-header'>Add Admin </h1>
        <div className='input-field'>
          <input id='email' name='email' placeholder='Enter E-mail here' ref={register({ required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <input className='primary-btn add-admin' type='submit' value='Add' />
      </form>
    </div>
  );
};

export default MakeAdmin;
