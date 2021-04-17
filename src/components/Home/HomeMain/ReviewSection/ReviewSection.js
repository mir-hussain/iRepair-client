import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ReviewSection.css";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/reviews").then((res) => setReviews(res.data));
  }, []);
  return (
    <section className='review-section'>
      <h1 className='text-gray'>
        Customer <span>Review</span>
      </h1>
      <div className='review-cards-container'>
        {reviews.map((review) => (
          <Card key={review.profession} review={review} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ review }) => {
  const { name, profession, description } = review;
  return (
    <div className='review-card'>
      <div className='customer-info'>
        <h1>{name}</h1>
        <h4>{profession}</h4>
      </div>
      <div className='review'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReviewSection;
