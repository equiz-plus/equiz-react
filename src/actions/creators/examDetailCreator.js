import {
  DETAIL_EXAMS_ERROR,
  DETAIL_EXAMS_LOADING,
  DETAIL_EXAMS_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const examDetailAction = (data) => ({
  type: DETAIL_EXAMS_SUCCESS,
  payload: data,
});

export const examDetailActionLoading = () => ({
  type: DETAIL_EXAMS_LOADING,
});

export const examDetailActionError = (error) => ({
  type: DETAIL_EXAMS_ERROR,
  payload: error,
});

export const detailExamMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(examDetailActionLoading());

    const res = await axios.get(`${baseUrl}/exams/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(examDetailAction(res.data));
  } catch (error) {
    dispatch(examDetailActionError(error.response.data));
  }
};
