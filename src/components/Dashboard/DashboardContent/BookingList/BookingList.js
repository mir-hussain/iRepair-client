import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App/App";

const BookingList = () => {
  const [user, setUser] = useContext(UserContext);
  const [bookings, setBookings] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);

  console.log("this is previous bookings", previousBookings);

  useEffect(() => {
    fetch("http://localhost:5000/bookings?email=" + user.email)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user.email]);

  useEffect(() => {
    const servicesId = bookings.map((booking) => booking.selectedService.key);

    fetch("http://localhost:5000/servicesByKeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(servicesId),
    })
      .then((res) => res.json())
      .then((data) => setPreviousBookings(data));
  }, [bookings]);

  return (
    <div style={{ width: "80%" }}>
      <div className='table-header'>
        <p>Service name</p>
        <p>price</p>
      </div>

      {previousBookings.map((orders) => (
        <BookingHistory key={orders.key} orders={orders} />
      ))}
    </div>
  );
};

const BookingHistory = (props) => {
  const { name, price } = props.orders;
  return (
    <div className='table-body'>
      <p>{name}</p>
      <p>{price} $ </p>
    </div>
  );
};

export default BookingList;
