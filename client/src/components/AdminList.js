import React from "react";
import { Route } from "react-router-dom";
import AddNewPizza from "../Pages/AddNewPizza";
import EditPizza from "../Pages/EditPizza";
import OrderList from "../Pages/OrderList";
import PizzaList from "../Pages/PizzaList";
import UserList from "../Pages/UserList";
const AdminList = () => {
  return (
    <>
      <Route path="/admin" exact component={UserList} />
      <Route path="/admin/user" exact component={UserList} />
      <Route path="/admin/pizzalist" exact component={PizzaList} />
      <Route path="/admin/addpizza" exact component={AddNewPizza} />
      <Route path="/admin/order" exact component={OrderList} />
      <Route path="/admin/editpizza/:pizzaid" exact component={EditPizza} />
    </>
  );
};

export default AdminList;
