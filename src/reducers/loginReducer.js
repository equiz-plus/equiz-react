import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  access_token: undefined,
  role: undefined,
  errorMessage: undefined,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        access_token: action.payload.access_token,
        role: action.payload.role,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
