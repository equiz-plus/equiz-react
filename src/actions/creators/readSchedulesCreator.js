import {
  READ_SCHEDULES_ERROR,
  READ_SCHEDULES_LOADING,
  READ_SCHEDULES_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const readSchedulesSuccess = (data) => ({
  type: READ_SCHEDULES_SUCCESS,
  payload: data,
});

export const readSchedulesFailed = (error) => ({
  type: READ_SCHEDULES_ERROR,
  payload: error,
});

export const readSchedulesLoading = () => ({
  type: READ_SCHEDULES_LOADING,
});

export const readSchedulessMiddleware = () => async (dispatch) => {
  try {
    dispatch(readSchedulesLoading());

    const res = await axios.get(`${baseUrl}/schedules`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(readSchedulesSuccess(res.data));
  } catch (error) {
    dispatch(readSchedulesFailed(error));
  }
};
