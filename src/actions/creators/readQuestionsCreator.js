import {
  READ_QUESTIONS_SUCCESS,
  READ_QUESTIONS_LOADING,
  READ_CATEGORIES_ERROR,
  READ_QUESTIONS_FAILED,
} from "../actionTypes";

import { baseUrl } from "../baseUrl";
import axios from "axios";

export const readQuestionSuccess = (data) => ({
  type: READ_QUESTIONS_SUCCESS,
  payload: data,
});

export const readQuestionFailed = (error) => ({
  type: READ_QUESTIONS_FAILED,
  payload: error,
});

export const readQuestionLoading = () => ({
  type: READ_QUESTIONS_LOADING,
});

export const readQuestionsMiddleware =
  (page, search = "", category, sort, length) =>
  async (dispatch) => {
    try {
      dispatch(readQuestionLoading());

      const res = await axios.get(
        `${baseUrl}/questions??displayLength=${length}&page=${page}&CategoryId=${category}&search=${search}&sort=${sort}`,
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(readQuestionSuccess(res.data));
    } catch (error) {
      dispatch(readQuestionFailed(error));
    }
  };
