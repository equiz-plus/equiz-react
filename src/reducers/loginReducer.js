import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  userData: {},
  access_token: undefined,
  role: undefined,
  id: undefined,
  errorMessage: undefined,
  avatar: undefined,
  name: undefined,
  isPremium: undefined,
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
        userData: action.payload,
        role: action.payload.role,
        id: action.payload.id,
        name: action.payload.name,
        avatar: action.payload.avatar,
        isPremium: action.payload.isPremium,
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
