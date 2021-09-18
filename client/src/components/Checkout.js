import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderActions";

const Checkout = ({ subtotal }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subtotal));
  };

  return (
    <>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        currency="USD"
        stripeKey="pk_test_51JXz75GKEiYuiSILuMqKVick06vx2ndISzWEgTGSXiLcKeqyLjJlhLSlDUPOn2JVTaatGmeNsNx57NEzPAgEGn7600oxD04LJK"
      >
        <button
          className="btn"
          style={{ color: "tomato", float: "right", marginRight: "70px" }}
        >
          Check Out
        </button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
