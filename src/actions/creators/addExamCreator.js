import {
  CREATE_EXAM_ERROR,
  CREATE_EXAM_LOADING,
  CREATE_EXAM_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const addExamAction = (data) => ({
  type: CREATE_EXAM_SUCCESS,
  payload: data,
});

export const addExamActionLoading = () => ({
  type: CREATE_EXAM_LOADING,
});

export const addExamActionError = (error) => ({
  type: CREATE_EXAM_ERROR,
  payload: error,
});

export const createExamMiddleware = (data) => async (dispatch) => {
  try {
    dispatch(addExamActionLoading());

    const res = await axios.post(`${baseUrl}/exams`, data, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(addExamAction(res.data));
  } catch (error) {
    dispatch(addExamActionError(error.response.data));
  }
};
