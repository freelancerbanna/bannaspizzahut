import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import { deletePizza, getPizzas } from "../actions/pizzaAction";
import Error from "../components/Error";
import Loading from "../components/Loading";

const PizzaList = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getPizzasReducer);
  const { pizzas, err, loading } = pizzaState;
  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);
  return (
    <>
      <h1 style={{ fontSize: "35px" }}>Pizzas List</h1>
      {loading && <Loading />}
      {err && <Error error="Sometihing Went Wrong" />}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((pizza, i) => (
              <tr key={i}>
                <td>{pizza.name}</td>
                <td>
                  Small:{pizza.prices[0]["small"]} <br />
                  Medium:{pizza.prices[0]["medium"]} <br />
                  Large:{pizza.prices[0]["large"]}
                </td>
                <td>{pizza.category}</td>
                <td style={{ columnGap: "10px", display: "flex" }}>
                  <i
                    className="fa fa-trash"
                    style={{ cursor: "pointer", marginTop: "6px" }}
                    onClick={() => {
                      dispatch(deletePizza(pizza._id));
                    }}
                  ></i>
                  <Link to={`/admin/editpizza/${pizza._id}`}>
                    <i className="fa fa-edit"></i>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default PizzaList;
