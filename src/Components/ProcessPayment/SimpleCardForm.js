import React, { useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const SimpleCardForm = () => {
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  console.log(loggedInUser)
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
    }
  };

  return (
    <div>
      <h3 className='text-center'>Welcome <span className='text-danger'> {loggedInUser.name}</span></h3>
      <img className='img-fluid' style={{ borderRadius: '50%' }} src={loggedInUser.photo} alt="" />
      <form onSubmit={handleSubmit}>
        <h3 className='text-center mt-5'>Pay Now</h3>
        <CardElement />
        <button class='btn btn-success mt-5' type="submit" disabled={!stripe}>
          Pay
            </button>
      </form>
      {
        paymentError && <p className='text-danger'>{paymentError}</p>
      }
      {
        paymentSuccess && <div className="">
          <p class='mt-5 text-success'>Your payment was successful</p>
          {/* <a href="/"><button className='btn btn-success'><FontAwesomeIcon icon={faHome} /> Go Home</button></a> */}
        </div>
      }
    </div>
  );
};

export default SimpleCardForm;