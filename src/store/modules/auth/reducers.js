import { auth } from "../action-types";

export const initialState = {
  isLoggedIn: false,
  token: "",
  post: null,
  isLoading: false,
  isError: false,
  msg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case auth.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case auth.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.jwt,
        post: action.post,
        isLoading: false,
      };
    case auth.LOGIN_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: true,
        msg: action.msg,
      };
    case auth.LOGIN_ERROR:
      return {
        ...state,
        isError: false,
        isLoading: false,
        msg: "",
      };
    case auth.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        token: "",
      };
    default:
      return state;
  }
};
