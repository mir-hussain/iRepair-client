import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Review.css";

const Review = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const reviewData = {
      name: data.name,
      profession: data.profession,
      description: data.description,
    };
    axios
      .post("https://irepairserver.herokuapp.com/addReview", reviewData)
      .then((res) => {
        console.log(res);
        alert("Review Added");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='review-section'>
      <form className='review-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='form-header'>Post a review here </h1>
        <div className='input-field'>
          <label htmlFor='name'>Name</label>
          <input id='name' name='name' placeholder='Enter your name here' ref={register({ required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className='input-field'>
          <label htmlFor='profession'>Profession</label>
          <input id='profession' name='profession' placeholder="Designation, Company's Name" ref={register({ required: true })} />
          {errors.profession && <span>This field is required</span>}
        </div>
        <div className='input-field'>
          <label htmlFor='description'>Description</label>
          <textarea name='description' id='description' ref={register({ required: true })} />
          {errors.review && <span>This field is required</span>}
        </div>

        <input className='primary-btn ' type='submit' value='Post' />
      </form>
    </div>
  );
};

export default Review;
