import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      key: data.key,
      imageURL: imageURL,
      price: data.price,
      description: data.description,
    };
    axios
      .post("http://localhost:5000/addService", serviceData)
      .then((res) => {
        console.log(res);
        alert("service Added");
      })
      .catch((err) => console.log(err));
  };

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    const imageData = new FormData();
    imageData.set("key", "b321aa392073ad18bf89a195efb05d27");
    imageData.append("image", image);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        const imageLink = response.data.data.display_url;
        setImageURL(imageLink);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className='add-service-section'>
      <form className='add-service-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='form-header'>Add service here </h1>
        <div className='service-input-field'>
          <label htmlFor='name'>Add service name</label>
          <input id='name' name='name' placeholder='Enter service name' ref={register({ required: true })} />
        </div>
        <div className='service-input-field'>
          <label htmlFor='description'>Add service description</label>
          <textarea name='description' ref={register({ required: true })} />
        </div>
        <div className='service-input-field'>
          <label htmlFor='key'>Add service key</label>
          <input id='key' name='key' placeholder='Enter service name' ref={register({ required: true })} />
        </div>
        <div className='service-input-field'>
          <label htmlFor='price'>Add price</label>
          <input id='price' name='price' placeholder='Enter Price' ref={register({ required: true })} />
        </div>
        <div className='service-input-field add-image'>
          <label htmlFor='image'>Add service image</label>
          <input id='image' name='image' type='file' onChange={handleImageUpload} />
        </div>

        {imageURL === null ? <input className='primary-btn' type='submit' value='Save' disabled /> : <input className='primary-btn' type='submit' value='Save' />}
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default AddService;
