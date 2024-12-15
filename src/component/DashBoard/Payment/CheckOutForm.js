import React, { useState} from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckOutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            console.log(error);
        }
        else {
            setError('');
            console.log(paymentMethod);
        }

    }

    return (
        <div>
        {
            error && <p style={{ color: 'red' }}>{error}</p>
        }
        {
            success && <p style={{ color: 'green' }}>{success}</p>
        }
            <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                        style: {
                            base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            },
                            invalid: {
                            color: '#9e2146',
                            },
                        },
                        }}
                    />
                    <button type="submit" disabled={!stripe}>
                      Pay
                    </button>
            </form>
        </div>
    );
};

export default CheckOutForm;