import {
  READ_GRADES_USER_FAILED,
  READ_GRADES_USER_LOADING,
  READ_GRADES_USER_SUCCESS,
} from "../actionTypes";
import axios from "axios";

import { baseUrl } from "../baseUrl";

export const readGradesSuccess = (data) => ({
  type: READ_GRADES_USER_SUCCESS,
  payload: data,
});

export const readGradesFailed = (error) => ({
  type: READ_GRADES_USER_FAILED,
  payload: error,
});

export const readGradesLoading = () => ({
  type: READ_GRADES_USER_LOADING,
});

export const userReadGradesMiddleware = () => async (dispatch) => {
  try {
    dispatch(readGradesLoading());
    const res = await axios.get(`${baseUrl}/grades/score`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    dispatch(readGradesSuccess(res.data));
  } catch (error) {
    dispatch(readGradesFailed(error));
  }
};
