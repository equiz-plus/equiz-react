import { actionClearGetSession } from "../actionCreators";
import {
  CLEAR_GET_SESSION,
  GET_SESSION_ERROR,
  GET_SESSION_LOADING,
  GET_SESSION_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const getSessionAction = (data) => ({
  type: GET_SESSION_SUCCESS,
  payload: data,
});

export const getSessionActionLoading = () => ({
  type: GET_SESSION_LOADING,
});

export const getSessionActionError = (error) => ({
  type: GET_SESSION_ERROR,
  payload: error,
});

export const clearGetSessionAction = () => ({
  type: CLEAR_GET_SESSION,
});

export const getSessionMiddleware = () => async (dispatch) => {
  try {
    dispatch(getSessionActionLoading());

    const res = await axios.get(`${baseUrl}/exams/session`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    console.log(res.data, "GET SESSION CREATOR");

    dispatch(getSessionAction(res.data));
  } catch (error) {
    dispatch(getSessionActionError(error.response.data));
  }
};

export const clearGetSessionMiddleware = () => async (dispatch) => {
  dispatch(actionClearGetSession());
};
