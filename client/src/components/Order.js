import React from "react";

const Order = ({ order }) => {
  return (
    <div className="flex-container">
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ fontSize: "25px" }}>Item</h2>
        <hr />
        {order.orderItems.map((item, i) => (
          <div key={i}>
            <h4>
              {item.name} [{item.varient}]*{item.quantity}={item.price}
            </h4>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",

          display: "flex",

          flexDirection: "column",
        }}
      >
        <h2 style={{ fontSize: "25px" }}>Address</h2>
        <hr />
        <h4>street:{order.shippingAddress.street}</h4>
        <h4>city:{order.shippingAddress.city}</h4>
        <h4>country:{order.shippingAddress.country}</h4>
        <h4>pincode:{order.shippingAddress.pincode}</h4>
      </div>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",

          display: "flex",

          flexDirection: "column",
        }}
      >
        <h2 style={{ fontSize: "25px" }}>Order Info</h2>
        <hr />
        <h4>Order Amount:{order.orderAmount}</h4>
        <h4>Date:{order.createdAt.substring(0, 10)}</h4>
        <h4>Order Id: {order.transactionId.substring(5)}</h4>
      </div>
    </div>
  );
};

export default Order;
