import {
  GET_SESSION_ERROR,
  GET_SESSION_LOADING,
  GET_SESSION_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  session: undefined,
  errorMessage: undefined,
};

const getSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SESSION_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SESSION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        session: action.payload,
      };
    case GET_SESSION_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
};

export default getSessionReducer;
