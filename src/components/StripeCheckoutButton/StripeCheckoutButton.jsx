import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./StripeCheckoutButtonStyles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HHEgxJHFnGkoT5WILq5CAvF1htqpuuxPo60gqII1kVy3oUx6JmJUBBIuMPCSYMxvYQS8ZOLMcxTcTEFSNvHtfQH0063s8qD1m";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Coruja Clothing"
      billingAddress
      shippingAddress
      image=""
      descriptioon={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      currency="USD"
      token={onToken}
      stripeKey={publishableKey}
      data-label="Proceed to Pay with Card"
    />
  );
};

export default StripeCheckoutButton;
