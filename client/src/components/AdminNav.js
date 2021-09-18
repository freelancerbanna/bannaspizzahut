import React from "react";
import { NavLink as Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <ul className="adminList">
      <li>
        <Link to="/admin/user">User List</Link>
      </li>
      <li>
        <Link to="/admin/pizzalist">Pizzas List</Link>
      </li>
      <li>
        <Link to="/admin/addpizza">Add New Pizza</Link>
      </li>
      <li>
        <Link to="/admin/order">Order List</Link>
      </li>
    </ul>
  );
};

export default AdminNav;
