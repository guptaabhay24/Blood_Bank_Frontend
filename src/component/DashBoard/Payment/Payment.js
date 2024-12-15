import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51JvmzoKqKae6Zou5AxH6aq59MECfkgRVG9oW8TbMF0DmKNoXNXcnAtxThRM7NrctKFLeCjBkWU5Zrrwo95JE5Fw500Dpdo1EEo');

const Payment = () => {
    return (
        <div className='m-5, p-5 container'>
            <h2>Payment System</h2>
            <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
        </div>
    );
};

export default Payment;