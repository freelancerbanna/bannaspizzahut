import axios from "axios";

export const userAuth = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    await axios.post("api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESFULL" });
  } catch (err) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: err });
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const res = await axios.post("api/users/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (err) {
    dispatch({ type: "USER_LOGIN_FAiLED", payload: err });
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: "GET_ALLUSER_REQUEST" });
  try {
    const res = await axios.get("/api/users/getusers");
    dispatch({ type: "GET_ALLUSER_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ALLUSER_FAiLED", payload: err });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/deleteuser", { userid });
    if (res) {
      window.alert("Delete Succesfully");
      window.location.href = "/admin";
    }
  } catch (err) {
    alert("Something went worng", err);
  }
};
