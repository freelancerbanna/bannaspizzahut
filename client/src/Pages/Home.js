import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "../actions/pizzaAction";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Pizza from "../components/Pizza";
const Home = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getPizzasReducer);
  const { pizzas, err, loading } = pizzaState;

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);
  return (
    <div className="container">
      <Filter />
      <div className="row align-items-center vh-100">
        {loading ? (
          <div className=" d-flex justify-content-center">
            <Loading />
          </div>
        ) : err ? (
          <Error error={`Something Went Wrong`} />
        ) : (
          pizzas.map((items, key) => (
            <div key={key} className="mb-3 col-md-4 col-sm-6 sm-m-0 d-flex">
              <div className="p-3 mb-5 rounded shadow-lg w-100 d-flex flex-column align-items-center">
                <Pizza item={items} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
