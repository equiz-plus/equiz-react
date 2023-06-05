import {
  CLEAR_DELETE_EXAM,
  DELETE_EXAM_ERROR,
  DELETE_EXAM_LOADING,
  DELETE_EXAM_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const deleteExamAction = () => ({
  type: DELETE_EXAM_SUCCESS,
});

export const deleteExamActionLoading = () => ({
  type: DELETE_EXAM_LOADING,
});

export const deleteExamActionError = (error) => ({
  type: DELETE_EXAM_ERROR,
  payload: error,
});

export const deleteExamActionClear = () => ({
  type: CLEAR_DELETE_EXAM,
});

export const deleteExamMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(deleteExamActionLoading());

    await axios.delete(`${baseUrl}/exams/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(deleteExamAction());
  } catch (error) {
    dispatch(deleteExamActionError(error.response.data));
  }
};

export const cleardeleteExamMiddleware = () => async (dispatch) => {
  dispatch(deleteExamActionClear());
};
