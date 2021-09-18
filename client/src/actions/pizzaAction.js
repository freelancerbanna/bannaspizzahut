import axios from "axios";
export const getPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZA_REQUEST" });
  try {
    const res = await axios.get("/api/pizza/getpizza");
    dispatch({ type: "GET_PIZZA_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZA_FAILED", payload: err });
  }
};

export const getFilterPizzas = (searchKey, categoryKey) => async (dispatch) => {
  let filteredPizzas;
  dispatch({ type: "GET_PIZZA_REQUEST" });
  try {
    const res = await axios.get("/api/pizza/getpizza");
    filteredPizzas = res.data.filter((item) =>
      item.name.toLowerCase().includes(searchKey)
    );
    if (categoryKey !== "all") {
      filteredPizzas = res.data.filter(
        (item) => item.category.toLowerCase() === categoryKey
      );
    }
    dispatch({ type: "GET_PIZZA_SUCCESS", payload: filteredPizzas });
  } catch (err) {
    dispatch({ type: "GET_PIZZA_FAILED", payload: err });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZA_REQUEST" });
  try {
    const res = await axios.post("/api/pizza/postPizza", pizza);
    dispatch({ type: "ADD_PIZZA_SUCCESS" });
    if (res) {
      alert("Pizza added succefully");
    }
  } catch (err) {
    dispatch({ type: "ADD_PIZZA_FAILED", payload: err });
  }
};

export const getPizzaById = (pizzaid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const res = await axios.post("/api/pizza/getpizza/getpizzaid", { pizzaid });
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZABYID_FAILED", payload: err });
  }
};
export const eidtedPizza = (editedpizza) => async (dispatch) => {
  dispatch({ type: "EDIT_PIZZA_REQUEST" });
  try {
    const res = await axios.post("/api/pizza/getpizza/editpizza", {
      editedpizza,
    });
    dispatch({ type: "EDIT_PIZZA_SUCCESS", payload: res.data });
    if (res) {
      window.alert("Updated Successfully");
      window.location.href = "/admin";
    }
  } catch (err) {
    dispatch({ type: "EDIT_PIZZA_FAILED", payload: err });
  }
};

export const deletePizza = (pizzaid) => async (dispatch) => {
  try {
    const res = await axios.post("/api/pizza/deltepizza", { pizzaid });
    if (res) {
      window.alert("Delete Succesfully");
    }
  } catch (err) {
    alert("Something went worng", err);
  }
};
