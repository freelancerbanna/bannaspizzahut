import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../actions/userAuth";
import { useHistory } from "react-router";
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const handleClick = () => {
    if (!user.name && !user.email && !user.password) {
      alert("All fields are required");
    } else if (user.password.length < 6) {
      alert("Password must be contains 6 characters");
    } else {
      const User = {
        password: user.password,
        email: user.email,
      };
      dispatch(userLogin(User));
    }
  };
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      history.push("/");
    }
  });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 ">
          <div className="p-2 mb-2 rounded shadow-lg form">
            <h1 className="text-center">Login</h1>

            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Enter your email"
              className="form-control"
              onChange={inputHandle}
            />
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter your password"
              className="form-control"
              onChange={inputHandle}
            />
            <div className="d-flex justify-content-between">
              <button onClick={handleClick} className="btn color-inherit">
                Login
              </button>
              <NavLink className="mt-4" to="/register">
                Don't have an account?
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
