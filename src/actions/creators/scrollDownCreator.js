import { CLEAR_SCROLL_DOWN, SCROLL_DOWN } from "../actionTypes";

export const scrollDownAction = () => ({
  type: SCROLL_DOWN,
});

export const clearScrollDownAction = () => ({
  type: CLEAR_SCROLL_DOWN,
});

export const scrollDownMiddleware = () => async (dispatch) => {
  dispatch(scrollDownAction());
};

export const clearScrollDownMiddleware = () => async (dispatch) => {
  dispatch(clearScrollDownAction());
};
