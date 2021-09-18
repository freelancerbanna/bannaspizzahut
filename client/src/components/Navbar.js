import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink as Link, NavLink } from "react-router-dom";
import { logoutUser } from "../reducers/userReducer";

const Navbar = () => {
  const dispatch = useDispatch();
  const [dropDownBtn, setDropDownBtn] = useState(false);
  const cartState = useSelector((state) => state.addToCartReducer);
  const userState = useSelector((state) => state.userLoginReducer);
  const { currentUser } = userState;
  const dropDownShow = () => {
    setDropDownBtn(!dropDownBtn);
  };
  return (
    <nav className="p-3 mb-5 rounded shadow-lg navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Banna's Pizza Hut
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="ml-auto navbar-nav">
          {currentUser ? (
            <div
              className="dropdown"
              onClick={dropDownShow}
              style={{ cursor: "pointer" }}
            >
              <div>
                <span className="dropdownBtn">{currentUser.name}</span>
                <span>
                  <i className="arrow down"></i>
                </span>
              </div>
              <div
                className={dropDownBtn ? "dropdownMenu active" : "dropdownMenu"}
              >
                <NavLink className="dropdown-item" to="/orders">
                  Orders
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  to="/logout"
                  onClick={() => dispatch(logoutUser())}
                >
                  Logout
                </NavLink>
              </div>
            </div>
          ) : (
            <li className="nav-item active">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart {localStorage.currentUser && cartState.cartItem.length}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
