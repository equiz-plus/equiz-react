import axios from "axios";
import { baseUrl } from "../baseUrl";
import {
  READ_STUDENTS_FAILED,
  READ_STUDENTS_LOADING,
  READ_STUDENTS_SUCCESS,
} from "../actionTypes";

export const readStudentsAction = (data) => ({
  type: READ_STUDENTS_SUCCESS,
  payload: data,
});

export const readStudentsActionLoading = () => ({
  type: READ_STUDENTS_LOADING,
});

export const readStudentsActionError = (error) => ({
  type: READ_STUDENTS_FAILED,
  payload: error,
});

export const readStudentsMiddleware = () => async (dispatch) => {
  try {
    dispatch(readStudentsActionLoading());

    const res = await axios.get(
      `${baseUrl}/users?displayLength=10&sort=id&order=ASC&page=1`,
      {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      }
    );
    console.log(res.data.users);

    dispatch(readStudentsAction(res.data));
  } catch (error) {
    dispatch(readStudentsActionError(error.response.data.message));
  }
};
