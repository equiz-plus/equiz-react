import {
  CLEAR_DELETE_QUESTION,
  DELETE_QUESTION_FAILED,
  DELETE_QUESTION_LOADING,
  DELETE_QUESTION_SUCCESS,
} from "../actionTypes";

import axios from "axios";
import { baseUrl } from "../baseUrl";

export const deleteQuestionFailed = (error) => ({
  type: DELETE_QUESTION_FAILED,
  payload: error,
});

export const deleteQuestionSuccess = (data) => ({
  type: DELETE_QUESTION_SUCCESS,
  payload: data,
});

export const deleteQuestionLoading = () => ({
  type: DELETE_QUESTION_LOADING,
});

export const deleteQuestionsActionClear = () => ({
  type: CLEAR_DELETE_QUESTION,
});

export const deleteQuestionMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(deleteQuestionLoading());

    const res = await axios.delete(`${baseUrl}/questions/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    dispatch(deleteQuestionSuccess(res.data));
  } catch (error) {
    dispatch(deleteQuestionFailed());
  }
};

export const clearDeleteQuestionsMiddleware = () => async (dispatch) => {
  dispatch(deleteQuestionsActionClear());
};
