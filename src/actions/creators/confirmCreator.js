import axios from "axios";
import {
  CONFIRM_FAILED,
  CONFIRM_LOADING,
  CONFIRM_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";

export const confirmAction = (confirmed) => ({
  type: CONFIRM_SUCCESS,
  payload: confirmed,
});

export const confirmActionLoading = () => ({
  type: CONFIRM_LOADING,
});

export const confirmActionError = (error) => ({
  type: CONFIRM_FAILED,
  payload: error,
});

export const confirmMiddleware = (data) => async (dispatch) => {
  try {
    dispatch(confirmActionLoading());

    const res = await axios.post(`${baseUrl}/confirmation`, data);

    dispatch(confirmAction(res.data));
  } catch (error) {
    dispatch(confirmActionError(error.response.data));
  }
};
