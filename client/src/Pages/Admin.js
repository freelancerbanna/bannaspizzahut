import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AdminList from "../components/AdminList";
import AdminNav from "../components/AdminNav";
const Admin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userLoginReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (!currentUser || !currentUser.isAdmin) {
      history.push("/");
    }
  }, []);
  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center "
        style={{ textAlign: "center" }}
      >
        <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
        <Router>
          <AdminNav />
          <Switch>
            <AdminList />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Admin;
