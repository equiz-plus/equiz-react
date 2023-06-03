import { CONFIRM, CONFIRM_FAILED } from "../actions/actionTypes";

const initialState = {
  confirmed: {},
  errorMessage: "",
};

const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM:
      return {
        ...state,
        confirmed: action.payload,
      };
    case CONFIRM_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default confirmReducer;
