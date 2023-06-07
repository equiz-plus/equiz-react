import { CLEAR_SCROLL_DOWN, SCROLL_DOWN } from "../actions/actionTypes";

const initialState = {
  scrollDown: false,
};

const scrollDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCROLL_DOWN:
      return {
        ...state,
        scrollDown: true,
      };
    case CLEAR_SCROLL_DOWN:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default scrollDownReducer;
