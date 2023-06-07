import {
  END_EXAM_ERROR,
  END_EXAM_LOADING,
  END_EXAM_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const endExamAction = () => ({
  type: END_EXAM_SUCCESS,
});

export const endExamActionLoading = () => ({
  type: END_EXAM_LOADING,
});

export const endExamActionError = (error) => ({
  type: END_EXAM_ERROR,
  payload: error,
});

export const endExamMiddleware = () => async (dispatch) => {
  try {
    dispatch(endExamActionLoading());

    const res = await axios.post(`${baseUrl}/exams/end`, null, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(endExamAction(res.data));
  } catch (error) {
    dispatch(endExamActionError(error.response.data));
  }
};
