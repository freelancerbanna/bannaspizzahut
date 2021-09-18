import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Order from "../components/Order";
import { getUserOrders } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrderReducer);
  const { orders, err, loading } = orderState;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>My Order</h2>
      <div className="row justify-content-center">
        {loading && <Loading />}
        {err && <Error error="something went wrong" />}
        {orders &&
          orders.map((order) => (
            <div key={order._id} className="col">
              <Order order={order} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Orders;
