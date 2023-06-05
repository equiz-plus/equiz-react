import {
  READ_ORGANIZATION_ERROR,
  READ_ORGANIZATION_LOADING,
  READ_ORGANIZATION_SUCCESS,
} from "../actionTypes";

import { baseUrl } from "../baseUrl";
import axios from "axios";

export const readOrganizationSuccess = (organizations) => ({
  type: READ_ORGANIZATION_SUCCESS,
  payload: organizations,
});

export const readOrganizationFailed = (data) => ({
  type: READ_ORGANIZATION_ERROR,
  payload: data,
});

export const readOrganizationLoading = () => ({
  type: READ_ORGANIZATION_LOADING,
});

export const readOrganizationMiddleware = () => async (dispatch) => {
  try {
    dispatch(readOrganizationLoading());

    const res = await axios.get(`${baseUrl}/organizations`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    // console.log(res.data);
    dispatch(readOrganizationSuccess(res.data));
  } catch (error) {
    dispatch(readOrganizationFailed(error.response.data.message));
  }
};
