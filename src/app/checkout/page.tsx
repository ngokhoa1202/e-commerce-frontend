'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { authStore, orderStore } from '@/stores';
import { useEffect, useState } from 'react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51QTDTp01R7NeVKvQk4veGRtmqsQyomEYSLGdIGH01azDfqRBG5axrKT169gUjqjcPtaNIzR2iFd81aCCzme4d8zB002GoqKfwT');

function Temp() {
  const { accessToken } = authStore.getState();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.log(submitError);
      return;
    }

    const res = await fetch('http://localhost:3000/ecommerce/payments/intent', {
      method: 'POST',
      headers: { Authorization: accessToken },
    });

    const { data } = await res.json();

    console.log(data);

    const result = await stripe.confirmPayment({
      // `Elements` instance that was used to create the Payment Element
      elements,
      clientSecret: data.client_secret,
      confirmParams: {
        return_url: 'http://localhost:3031',
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      console.log(result);
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <div className="w-1/2 mx-auto bg-white rounded-lg p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <PaymentElement />
        <button
          type="submit"
          disabled={!stripe}
          className="bg-blue-600 px-4 py-2 text-white self-end font-bold rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );

}

export default function Page() {
  const { orders } = orderStore.getState();

  const [options, setOptions] = useState({
    mode: 'payment',
    amount: 0,
    currency: 'usd',
  });
  useEffect(() => {
    options.amount = orders.reduce((res, order) => res + (order.fee || 0), 0);
    setOptions(options);
  }, [orders]);

  return (
    <Elements stripe={stripePromise} options={options}>
      <Temp />
    </Elements>
  );
}
