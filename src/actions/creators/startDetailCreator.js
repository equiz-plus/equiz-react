import {
  START_DETAIL_ERROR,
  START_DETAIL_LOADING,
  START_DETAIL_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const startDetailAction = (data) => ({
  type: START_DETAIL_SUCCESS,
  payload: data,
});

export const startDetailActionLoading = () => ({
  type: START_DETAIL_LOADING,
});

export const startDetailActionError = (error) => ({
  type: START_DETAIL_ERROR,
  payload: error,
});

export const startDetailMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(startDetailActionLoading());

    const res = await axios.get(`${baseUrl}/exams/detail/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    console.log(res.data, "ini res data");

    dispatch(startDetailAction(res.data));
  } catch (error) {
    dispatch(startDetailActionError(error.response.data));
  }
};
