import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderList = () => {
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  useEffect(() => {
    axios.get("https://irepairserver.herokuapp.com/bookings").then((res) => setBookings(res.data));
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <div className='table-header'>
        <p>service name</p>
        <p>Price</p>
        <p>Status</p>
      </div>
      <div className='service-table-body'>
        {bookings.map((booking) => (
          <Bookings key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

const Bookings = ({ booking }) => {
  const [singleBooking, setSingleBooking] = useState([]);

  const loadBooking = (id) => {
    axios.get("http://localhost:5000/bookingById/" + id).then((res) => console.log(res.data));
  };
  const { _id } = booking;
  const { name, price, status } = booking.selectedService;
  return (
    <div className='table-body'>
      <p>{name}</p>
      <p>{price} $ </p>
      <div>
        <select name='status'>
          <option value='pending'>{status}</option>
          <option value='onGoing'>On going</option>
          <option value='done'>Done</option>
        </select>
        <button onClick={() => loadBooking(_id)}>Update</button>
      </div>
    </div>
  );
};

export default OrderList;
