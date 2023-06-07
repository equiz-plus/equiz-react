import {
  EDIT_EXAM_SCHEDULE_ERROR,
  EDIT_EXAM_SCHEDULE_LOADING,
  EDIT_EXAM_SCHEDULE_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const editScheduleSuccess = (data) => ({
  type: EDIT_EXAM_SCHEDULE_SUCCESS,
  payload: data,
});

export const editScheduleLoading = () => ({
  type: EDIT_EXAM_SCHEDULE_LOADING,
});

export const editScheduleFailed = (error) => ({
  type: EDIT_EXAM_SCHEDULE_ERROR,
  payload: error,
});

export const editScheduleMiddleware = (data, id) => async (dispatch) => {
  try {
    dispatch(editScheduleLoading());

    const res = await axios.put(`${baseUrl}/schedules/${id}`, data, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(editScheduleSuccess(res.data));
  } catch (error) {
    dispatch(editScheduleFailed(error.response.data));
  }
};
