import axios from "axios";
import { baseUrl } from "../baseUrl";
import {
  READ_EXAMS_ERROR,
  READ_EXAMS_LOADING,
  READ_EXAMS_SUCCESS,
} from "../actionTypes";

export const readExamsAction = (data) => ({
  type: READ_EXAMS_SUCCESS,
  payload: data,
});

export const readExamsActionLoading = () => ({
  type: READ_EXAMS_LOADING,
});

export const readExamsActionError = (error) => ({
  type: READ_EXAMS_ERROR,
  payload: error,
});

export const readExamsMiddleware =
  (page, search = "", category, sort, length) =>
  async (dispatch) => {
    try {
      dispatch(readExamsActionLoading());

      const res = await axios.get(
        `${baseUrl}/exams?displayLength=${length}&page=${page}&CategoryId=${category}&search=${search}&sort=${sort}`,
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(readExamsAction(res.data));
    } catch (error) {
      dispatch(readExamsActionError(error.response.data.message));
    }
  };
