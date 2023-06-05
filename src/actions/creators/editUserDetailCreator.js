import {
  EDIT_USER_PROFILE_FAILED,
  EDIT_USER_PROFILE_LOADING,
  EDIT_USER_PROFILE_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const editUserSuccess = (data) => ({
  type: EDIT_USER_PROFILE_SUCCESS,
  payload: data,
});

export const editUserFailed = (error) => ({
  type: EDIT_USER_PROFILE_FAILED,
  payload: error,
});

export const editUserLoading = () => ({
  type: EDIT_USER_PROFILE_LOADING,
});

export const editUserDetailMiddleware = (data) => async (dispatch) => {
  try {
    dispatch(editUserLoading());

    const res = await axios.put(`${baseUrl}/users/edit`, data, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(editUserSuccess(res.data));
  } catch (error) {
    dispatch(editUserFailed(error));
  }
};
