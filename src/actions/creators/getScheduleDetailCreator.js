import {
  GET_SCHEDULE_DETAIL_ERROR,
  GET_SCHEDULE_DETAIL_LOADING,
  GET_SCHEDULE_DETAIL_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const getScheduleDetailSuccess = (data) => ({
  type: GET_SCHEDULE_DETAIL_SUCCESS,
  payload: data,
});

export const getScheduleDetailLoading = () => ({
  type: GET_SCHEDULE_DETAIL_LOADING,
});

export const getScheduleDetailFailed = (error) => ({
  type: GET_SCHEDULE_DETAIL_ERROR,
  payload: error,
});

export const getScheduleDetailMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(getScheduleDetailLoading());

    const res = await axios.get(`${baseUrl}/schedules/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(getScheduleDetailSuccess(res.data));
  } catch (error) {
    dispatch(getScheduleDetailFailed(error.response.data));
  }
};
