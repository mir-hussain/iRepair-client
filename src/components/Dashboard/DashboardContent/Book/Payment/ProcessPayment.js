import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from "./PaymentCard";

const stripePromise = loadStripe("pk_test_51IhVJuDZkvM7NbzhsmgRSq31vEpaPZVNTNmH7xrsbhmBN69M2PNrQmfnTX7bQJATTCqyGPyDyIbM0nGV6b9hZRLf00Bi82dbDd");

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCard />
    </Elements>
  );
};

export default ProcessPayment;
