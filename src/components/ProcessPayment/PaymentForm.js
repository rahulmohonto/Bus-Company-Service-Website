import React, { useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import { set } from "react-hook-form";



const useOptions = () => {

    const options = useMemo(
        () => ({
            style: {
                base: {

                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        if (error) {
            setError(error.message);
            setSuccess(null);
            console.log(error);
        } else {
            setSuccess(payload.id)
            setError(null);

            console.log("[PaymentMethod]", payload);
        }

    };

    return (
        <div className="container payment-form-holder">
            <form onSubmit={handleSubmit}>
                <label>
                    Card number
        <CardNumberElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <br />
                <label>
                    Expiration date
        <CardExpiryElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <br />
                <label>
                    CVC
        <CardCvcElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <br />
                <button className="btn btn-brand" type="submit" >
                    Pay
      </button>
            </form>
            {
                error && <p style={{ color: 'red' }}>{error.message}</p>
            }
            {
                success && <p style={{ color: 'green' }}>Payment Successful</p>
            }
        </div>
    );
};

export default PaymentForm;
