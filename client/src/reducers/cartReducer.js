export const addToCartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExist = state.cartItem.find(
        (item) => item._id === action.payload._id
      );

      if (alreadyExist) {
        return {
          ...state,
          cartItem: state.cartItem.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          cartItem: [...state.cartItem, action.payload],
        };
      }

    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
