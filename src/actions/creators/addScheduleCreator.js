import {
  CREATE_EXAM_SCHEDULE_ERROR,
  CREATE_EXAM_SCHEDULE_LOADING,
  CREATE_EXAM_SCHEDULE_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const addExamScheduleAction = (data) => ({
  type: CREATE_EXAM_SCHEDULE_SUCCESS,
  payload: data,
});

export const addExamScheduleActionLoading = () => ({
  type: CREATE_EXAM_SCHEDULE_LOADING,
});

export const addExamScheduleActionError = (error) => ({
  type: CREATE_EXAM_SCHEDULE_ERROR,
  payload: error,
});

export const createExamScheduleMiddleware = (data) => async (dispatch) => {
  try {
    dispatch(addExamScheduleActionLoading());

    const res = await axios.post(`${baseUrl}/schedules`, data, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(addExamScheduleAction(res.data));
  } catch (error) {
    dispatch(addExamScheduleActionError(error.response.data));
  }
};
