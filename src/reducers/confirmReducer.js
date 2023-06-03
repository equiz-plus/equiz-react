import {
  CONFIRM_FAILED,
  CONFIRM_LOADING,
  CONFIRM_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CONFIRM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case CONFIRM_FAILED:
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

export default confirmReducer;
