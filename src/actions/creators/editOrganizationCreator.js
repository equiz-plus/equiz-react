import {
  EDIT_ORGANIZATION_FAILED,
  EDIT_ORGANIZATION_LOADING,
  EDIT_ORGANIZATION_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const editOrganizationSuccess = (data) => ({
  type: EDIT_ORGANIZATION_SUCCESS,
  payload: data,
});

export const editOrganizationLoading = () => ({
  type: EDIT_ORGANIZATION_LOADING,
});

export const editOrganizationFailed = (error) => ({
  type: EDIT_ORGANIZATION_FAILED,
  payload: error,
});

export const editOrganizationMiddleware = (data, id) => async (dispatch) => {
  try {
    dispatch(editOrganizationLoading());

    const res = await axios.put(`${baseUrl}/organizations/${id}`, data, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(editOrganizationSuccess(res.data));
  } catch (error) {
    dispatch(editOrganizationFailed(error.response.data));
  }
};
