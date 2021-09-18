export const getPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_PIZZA_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PIZZA_SUCCESS":
      return {
        loading: false,
        pizzas: action.payload,
      };
    case "GET_PIZZA_FAILED":
      return {
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export const getPizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZABYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PIZZABYID_SUCCESS":
      return {
        loading: false,
        pizza: action.payload,
      };
    case "GET_PIZZABYID_FAILED":
      return {
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export const addPizzasReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZA_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_PIZZA_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_PIZZA_FAILED":
      return {
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export const editedPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_PIZZA_REQUEST":
      return {
        editedloading: true,
        ...state,
      };
    case "EDIT_PIZZA_SUCCESS":
      return {
        editedloading: false,
        editedpizza: true,
      };
    case "EDIT_PIZZA_FAILED":
      return {
        editedloading: false,
        editederr: action.payload,
      };
    default:
      return state;
  }
};
