import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().userLoginReducer.currentUser;
  const cartItems = getState().addToCartReducer.cartItem;
  try {
    await axios.post("/api/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESSFUL" });
  } catch (err) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().userLoginReducer.currentUser;
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });
  try {
    const res = await axios.post("/api/orders/getuserorders", {
      userId: currentUser._id,
    });
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: err });
  }
};

export const getAllOrders = () => async (dispatch, getState) => {
  dispatch({ type: "GET_ALLORDERS_REQUEST" });
  try {
    const res = await axios.get("/api/orders/getallorders");
    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ALLORDERS_FAILED", payload: err });
  }
};

export const deliverOrder = (orderid) => async (dispatch) => {
  try {
    const res = await axios.post("/api/orders/deliverorder", { orderid });
    console.log(res);
    alert("order deliver");
    const orders = await axios.get("/api/orders/getallorders");
    dispatch({ type: "DELIVER_ORDER_SUCCESS", payload: orders.data });
  } catch (err) {
    alert("Something worong", err);
  }
};
