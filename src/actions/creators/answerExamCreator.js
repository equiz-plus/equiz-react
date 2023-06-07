import {
  ANSWER_EXAM_ERROR,
  ANSWER_EXAM_LOADING,
  ANSWER_EXAM_SUCCESS,
  CLEAR_ANSWER_EXAM,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const answerExamAction = (data) => ({
  type: ANSWER_EXAM_SUCCESS,
  payload: data,
});

export const answerExamActionLoading = () => ({
  type: ANSWER_EXAM_LOADING,
});

export const answerExamActionError = (error) => ({
  type: ANSWER_EXAM_ERROR,
  payload: error,
});

export const answerExamActionClear = () => ({
  type: CLEAR_ANSWER_EXAM,
});

export const answerExamMiddleware =
  (questionNumber, data) => async (dispatch) => {
    try {
      dispatch(answerExamActionLoading());

      const res = await axios.post(
        `${baseUrl}/exams/answer/${questionNumber}`,
        data,
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );

      dispatch(answerExamAction(res.data));
    } catch (error) {
      dispatch(answerExamActionError(error.response.data));
    }
  };

export const clearAnswerExamMiddleware = () => async (dispatch) => {
  dispatch(answerExamActionClear());
};
