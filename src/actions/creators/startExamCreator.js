import {
  START_DETAIL_ERROR,
  START_EXAM_LOADING,
  START_EXAM_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const startExamAction = () => ({
  type: START_EXAM_SUCCESS,
});

export const startExamActionLoading = () => ({
  type: START_EXAM_LOADING,
});

export const startExamActionError = (error) => ({
  type: START_DETAIL_ERROR,
  payload: error,
});

export const startExamMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(startExamActionLoading());

    await axios.post(`${baseUrl}/exams/start/${id}`, null, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(startExamAction());
  } catch (error) {
    dispatch(startExamActionError(error.response.data));
  }
};
