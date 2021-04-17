import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const MakeAdmin = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const adminEmail = {
      email: data.email,
    };
    axios
      .post("http://localhost:5000/addAdmin", adminEmail)
      .then((res) => {
        console.log(res);
        alert("E-mail Added");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>This is make admin</h1>
      <form className='add-service-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='form-header'>Add Admin </h1>
        <div className='service-input-field'>
          <input id='email' name='email' placeholder='Enter E-mail here' ref={register({ required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <input className='primary-btn' type='submit' value='Add' />
      </form>
    </div>
  );
};

export default MakeAdmin;
