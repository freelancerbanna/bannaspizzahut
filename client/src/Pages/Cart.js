import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.addToCartReducer);
  const carItems = cartState.cartItem;
  const subtotal = carItems.reduce((x, item) => x + item.price, 0);
  const homeUrl = () => {
    setTimeout(() => {
      history.push("/");
    }, 800);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 style={{ fontSize: "40px", textAlign: "center" }}>MY Cart</h1>
          {carItems.map((item, i) => (
            <div key={i} className="p-2 mb-2 rounded shadow-lg fisplay-flex">
              <div
                style={{ textAlign: "left" }}
                className="mt-2 text-center w-100"
              >
                <h2>
                  {item.name} [{[item.varient]}]
                </h2>
                <h2>
                  Price: {item.quantity} * {item.prices[0][item.varient]}={" "}
                  {item.price} $
                </h2>
                <h2 style={{ display: "inline" }}>Quantity: </h2>
                <i
                  onClick={() =>
                    dispatch(
                      addToCart(item, parseInt(item.quantity) + 1, item.varient)
                    )
                  }
                  className="fa fa-plus"
                  style={{
                    fontSize: "25px",
                    color: "tomato",
                    cursor: "pointer",
                    margin: "5px",
                  }}
                ></i>
                <span
                  style={{
                    fontSize: "22px",
                    margin: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  {item.quantity}
                </span>
                <i
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity - 1, item.varient));
                  }}
                  className="fa fa-minus"
                  style={{
                    fontSize: "30px",
                    color: "red",
                    cursor: "pointer",
                    margin: "5px",
                  }}
                ></i>
              </div>
              <div className="mt-2 text-center w-100">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    height: "120px",
                    width: "180px",
                    objectFit: "cover",
                  }}
                  className="rounded"
                />
              </div>
              <div className="mt-2 text-center w-100">
                <i
                  onClick={() => {
                    dispatch(deleteFromCart(item));
                    homeUrl();
                  }}
                  className="fa fa-trash"
                  style={{
                    fontSize: "28px",
                    color: "red",
                    cursor: "pointer",
                    margin: "5px",
                  }}
                ></i>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center col-md-4">
          <h1>Subtotal: {subtotal}$</h1>
          {/*  */}
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
