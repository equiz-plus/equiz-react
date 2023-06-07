import {
  EDIT_EXAM_ERROR,
  EDIT_EXAM_LOADING,
  EDIT_EXAM_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const editExamAction = (data) => ({
  type: EDIT_EXAM_SUCCESS,
  payload: data,
});

export const editExamActionLoading = () => ({
  type: EDIT_EXAM_LOADING,
});

export const editExamActionError = (error) => ({
  type: EDIT_EXAM_ERROR,
  payload: error,
});

export const editExamMiddleware = (data, id) => async (dispatch) => {
  try {
    dispatch(editExamActionLoading());

    const res = await axios.put(`${baseUrl}/exams/${id}`, data, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(editExamAction(res.data));
  } catch (error) {
    dispatch(editExamActionError(error.response.data));
  }
};
