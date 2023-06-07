import {
  CLEAR_DELETE_SCHEDULE,
  DELETE_SCHEDULE_ERROR,
  DELETE_SCHEDULE_LOADING,
  DELETE_SCHEDULE_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const deleteScheduleAction = () => ({
  type: DELETE_SCHEDULE_SUCCESS,
});

export const deleteScheduleActionLoading = () => ({
  type: DELETE_SCHEDULE_LOADING,
});

export const deleteScheduleActionError = (error) => ({
  type: DELETE_SCHEDULE_ERROR,
  payload: error,
});

export const deleteScheduleActionClear = () => ({
  type: CLEAR_DELETE_SCHEDULE,
});

export const deleteScheduleMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(deleteScheduleActionLoading());

    await axios.delete(`${baseUrl}/schedules/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(deleteScheduleAction());
  } catch (error) {
    dispatch(deleteScheduleActionError(error.response.data));
  }
};

export const clearDeleteScheduleMiddleware = () => async (dispatch) => {
  dispatch(deleteScheduleActionClear());
};
