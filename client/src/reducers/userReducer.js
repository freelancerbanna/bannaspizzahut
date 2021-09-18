export const userReducerRegister = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "USER_REGISTER_SUCCESFULL":
      return {
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "USER_LOGIN_SUCCESFULL":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "USER_LOGIN_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

export const allUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALLUSER_REQUEST":
      return {
        loading: true,
      };
    case "GET_ALLUSER_SUCCESS":
      return {
        loading: false,
        success: true,
        allUser: action.payload,
      };
    case "GET_ALLUSER_FAiLED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
