import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import Admin from "./Pages/Admin";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/admin" exact component={Admin} />
      </Switch>
    </Router>
  );
};

export default App;
