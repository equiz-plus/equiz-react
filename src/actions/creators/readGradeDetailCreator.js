import {
  READ_GRADE_DETAILS_FAILED,
  READ_GRADE_DETAILS_LOADING,
  READ_GRADE_DETAILS_SUCCESS,
} from "../actionTypes";

import axios from "axios";
import { baseUrl } from "../baseUrl";

export const readDetailGradeSuccess = (data) => ({
  type: READ_GRADE_DETAILS_SUCCESS,
  payload: data,
});
export const readDetailGradeFailed = (error) => ({
  type: READ_GRADE_DETAILS_FAILED,
  payload: error,
});
export const readDetailGradeLoading = () => ({
  type: READ_GRADE_DETAILS_LOADING,
});

export const readGradeDetailMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(readDetailGradeLoading());
    const res = await axios.get(`${baseUrl}/grades/score/detail/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(readDetailGradeSuccess(res.data));
  } catch (error) {
    dispatch(readDetailGradeFailed(error));
  }
};
