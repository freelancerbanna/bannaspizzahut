import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../actions/pizzaAction";
import Error from "../components/Error";
import Loading from "../components/Loading";
const AddNewPizza = () => {
  const dispatch = useDispatch();
  const addPizzaState = useSelector((state) => state.addPizzasReducer);
  const { err, loading } = addPizzaState;
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
    const Pizzas = {
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
    setText([{}]);
    dispatch(addPizza(Pizzas));
  };
  return (
    <>
      {loading && <Loading />}
      {err && <Error />}
      <h1 style={{ fontSize: "35px" }}>Add Pizzas</h1>
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
          Add Pizza
        </button>
      </form>
    </>
  );
};

export default AddNewPizza;
