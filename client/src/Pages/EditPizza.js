import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eidtedPizza, getPizzaById } from "../actions/pizzaAction";

import Error from "../components/Error";
import Loading from "../components/Loading";

const EditPizza = ({ match }) => {
  const dispatch = useDispatch();
  const getPizzaStateId = useSelector((state) => state.getPizzaByIdReducer);
  const { err, loading, pizza } = getPizzaStateId;
  const editedPizzaState = useSelector((state) => state.editedPizzaReducer);
  const { editederr, editedloading, editedpizza } = editedPizzaState;
  const [text, setText] = useState({
    name: "",
    small: "",
    medium: "",
    large: "",
    category: "",
    image: "",
    description: "",
  });
  const { name, small, category, description, image, large, medium } = text;
  const handleInput = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedPizzas = {
      id: match.params.pizzaid,
      name,
      category,
      description,
      image,
      prices: {
        small,
        large,
        medium,
      },
    };
    dispatch(eidtedPizza(editedPizzas));
  };
  useEffect(() => {
    console.log(pizza);
    if (pizza) {
      if (pizza._id === match.params.pizzaid) {
        setText({
          ...text,
          name: pizza.name,
          category: pizza.category,
          description: pizza.description,
          image: pizza.image,
          small: pizza.prices[0]["small"],
          medium: pizza.prices[0]["medium"],
          large: pizza.prices[0]["large"],
        });
      } else {
        dispatch(getPizzaById(match.params.pizzaid));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaid));
    }
  }, [pizza, dispatch]);

  return (
    <>
      <h1>Edit Pizzas</h1>
      <h1>Pizza Id= {match.params.pizzaid}</h1>
      {(editedloading || loading) && <Loading />}
      {(editederr || err) && <Error />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name of the pizza"
          value={name}
          onChange={handleInput}
        />
        <input
          type="number"
          className="form-control"
          name="small"
          placeholder="Small Varient Price"
          value={small}
          onChange={handleInput}
        />
        <input
          type="number"
          className="form-control"
          name="medium"
          placeholder="Medium Varient Price"
          value={medium}
          onChange={handleInput}
        />
        <input
          type="number"
          className="form-control"
          name="large"
          placeholder="Large Varient Price"
          value={large}
          onChange={handleInput}
        />
        <input
          type="text"
          className="form-control"
          name="category"
          placeholder="Category"
          value={category}
          onChange={handleInput}
        />
        <input
          type="text"
          className="form-control"
          name="image"
          placeholder="Image url"
          value={image}
          onChange={handleInput}
        />
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Product Description"
          value={description}
          onChange={handleInput}
        />
        <button
          className="mt-3 btn"
          style={{ width: "20%", float: "left" }}
          type="submit"
        >
          Update Pizza
        </button>
      </form>
    </>
  );
};

export default EditPizza;
