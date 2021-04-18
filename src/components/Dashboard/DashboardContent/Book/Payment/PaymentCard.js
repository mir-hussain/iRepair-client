import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { PaymentContext } from "../Book";

const PaymentCard = () => {
  const [payment, setPayment] = useContext(PaymentContext);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPayment(false);
    } else {
      setPayment(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='card-input-field'>
        <CardElement />
      </div>

      <div className='input-field'>
        <button className='primary-btn' type='submit' disabled={!stripe}>
          Pay
        </button>
      </div>
    </form>
  );
};

export default PaymentCard;
