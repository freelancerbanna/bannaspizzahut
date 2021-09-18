import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

const OrderList = () => {
  const getOrdres = useSelector((state) => state.getAllOrderReducer);
  const { loading, orders, err } = getOrdres;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <>
      <h1>Order List</h1>
      {loading && <Loading />}
      {err && <Error error="Something went wrong" />}
      {orders && (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Order Id</th>
              <th>Email</th>
              <th>User Id</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((orderItem, i) => (
              <tr key={i}>
                <td>{orderItem._id}</td>
                <td>{orderItem.email}</td>
                <td>{orderItem.userId}</td>
                <td>{orderItem.orderAmount}</td>
                <td>{orderItem.createdAt.substring(0, 10)}</td>
                <td>
                  {orderItem.isDeliver ? (
                    <h1 style={{ fontSize: "15px" }}>Delivered</h1>
                  ) : (
                    <button
                      className="btn"
                      onClick={() => {
                        dispatch(deliverOrder(orderItem._id));
                      }}
                    >
                      Deliver
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default OrderList;
