import {
  CLEAR_PATCH_EXAM,
  PATCH_EXAM_ERROR,
  PATCH_EXAM_LOADING,
  PATCH_EXAM_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const patchExamAction = () => ({
  type: PATCH_EXAM_SUCCESS,
});

export const patchExamActionLoading = () => ({
  type: PATCH_EXAM_LOADING,
});

export const patchExamActionError = (error) => ({
  type: PATCH_EXAM_ERROR,
  payload: error,
});

export const patchExamActionClear = () => ({
  type: CLEAR_PATCH_EXAM,
});

export const patchExamMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(patchExamActionLoading());

    await axios.patch(`${baseUrl}/exams/change-visibility/${id}`, null, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(patchExamAction());
  } catch (error) {
    dispatch(patchExamActionError(error.response.data));
  }
};

export const clearPatchExamMiddleware = () => async (dispatch) => {
  dispatch(patchExamActionClear());
};
