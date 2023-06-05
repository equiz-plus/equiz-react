import {
  READ_USER_PROFILE_FAILED,
  READ_USER_PROFILE_LOADING,
  READ_USER_PROFILE_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const readUserSuccess = (data) => ({
  type: READ_USER_PROFILE_SUCCESS,
  payload: data,
});

export const readUserFailed = (error) => ({
  type: READ_USER_PROFILE_FAILED,
  payload: error,
});

export const readUserLoading = () => ({
  type: READ_USER_PROFILE_LOADING,
});

export const readUserDetailMiddleware = () => async (dispatch) => {
  try {
    dispatch(readUserLoading());

    const res = await axios.get(`${baseUrl}/users/profile`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(readUserSuccess(res.data));
  } catch (error) {
    dispatch(readUserFailed(error));
  }
};
