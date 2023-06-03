import { baseUrl } from "../baseUrl";
import axios from "axios";
import {
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../actionTypes";

export const registerAction = (registered) => ({
  type: REGISTER_SUCCESS,
  payload: registered,
});

export const registerActionLoading = () => ({
  type: REGISTER_LOADING,
});

export const registerActionError = (error) => ({
  type: REGISTER_FAILED,
  payload: error,
});

export const registerMiddleware = (data) => async (dispatch) => {
  try {
    dispatch(registerActionLoading());

    const res = await axios.post(`${baseUrl}/register`, data);

    dispatch(registerAction(res.data));
  } catch (error) {
    dispatch(registerActionError(error.response.data));
  }
};
