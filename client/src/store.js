import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getPizzasReducer,
  addPizzasReducer,
  getPizzaByIdReducer,
  editedPizzaReducer,
} from "./reducers/pizzaReducer";
import { addToCartReducer } from "./reducers/cartReducer";
import {
  allUserReducer,
  userLoginReducer,
  userReducerRegister,
} from "./reducers/userReducer";
import {
  placeOrderReducer,
  getUserOrderReducer,
  getAllOrderReducer,
} from "./reducers/orderReducer";
const finalReducer = combineReducers({
  getPizzasReducer: getPizzasReducer,
  addToCartReducer: addToCartReducer,
  userReducerRegister: userReducerRegister,
  userLoginReducer: userLoginReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrderReducer: getUserOrderReducer,
  addPizzasReducer: addPizzasReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  editedPizzaReducer: editedPizzaReducer,
  getAllOrderReducer: getAllOrderReducer,
  allUserReducer: allUserReducer,
});

const cartItem = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const InitialStates = {
  addToCartReducer: {
    cartItem: cartItem,
  },
  userLoginReducer: {
    currentUser: currentUser,
  },
};
const composeEnhancer = composeWithDevTools({});
export const store = createStore(
  finalReducer,
  InitialStates,
  composeEnhancer(applyMiddleware(thunk))
);
