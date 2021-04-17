import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm.js'



const stripePromise = loadStripe('pk_test_51Ie2ceDjOxFCnd42in6iI28zcPFRpmKe5edGcsJ66eqyNmVq4BsuZ9vHN0BrnSGkvWDjuCqIge4Y85xSTDKg2LHC00Tu5YOuH6');


const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>

      <PaymentForm />

    </Elements>
  );
};

export default ProcessPayment;