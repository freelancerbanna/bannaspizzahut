import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAuth } from "../actions/userAuth";
import { useHistory } from "react-router";
const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
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
    } else if (user.password !== user.cpassword) {
      alert("Password not mathced");
    } else if (user.password.length < 6) {
      alert("Password must be contains 6 characters");
    } else {
      const User = {
        name: user.name,
        password: user.password,
        email: user.email,
      };
      dispatch(userAuth(User));
      setTimeout(() => {
        alert("Registration Successfull");
        loginPage();
      }, 1000);
      const loginPage = () => {
        setTimeout(() => {
          history.push("/login");
        }, 500);
      };
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="p-2 mb-2 rounded shadow-lg form">
            <h1 className="text-center">Register</h1>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Enter your name"
              className="form-control"
              onChange={inputHandle}
            />
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
            <input
              type="password"
              name="cpassword"
              value={user.cpassword}
              placeholder="Confirm password"
              className="form-control"
              onChange={inputHandle}
            />
            <div className="d-flex justify-content-between">
              <button onClick={handleClick} className="btn color-inherit">
                Register
              </button>
              <NavLink className="mt-4" to="/login">
                Already have an account?
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
