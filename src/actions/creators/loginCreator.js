import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from "../actionTypes";
import axios from "axios";
import { baseUrl } from "../baseUrl";

export const loginAction = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginActionLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginActionError = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const loginMiddleware = (data) => async (dispatch) => {
  try {
    dispatch(loginActionLoading());

    const res = await axios.post(`${baseUrl}/login`, data);
    console.log(res.data);
    dispatch(loginAction(res.data));
  } catch (error) {
    dispatch(loginActionError(error.response.data.message));
  }
};
