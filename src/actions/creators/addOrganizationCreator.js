import {
  CREATE_ORGANIZATION_SUCCESS,
  CREATE_ORGANIZATION_FAILED,
  CREATE_ORGANIZATION_LOADING,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const addOrganizationSuccess = (data) => ({
  type: CREATE_ORGANIZATION_SUCCESS,
  payload: data,
});

export const addOrganizationLoading = () => ({
  type: CREATE_ORGANIZATION_LOADING,
});

export const addOrganizationFailed = (error) => ({
  type: CREATE_ORGANIZATION_FAILED,
  payload: error,
});

export const createOrganizationMiddleware = (data) => async (dispatch) => {
  try {
    dispatch(addOrganizationLoading());

    const res = await axios.post(`${baseUrl}/organizations`, data, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(addOrganizationSuccess(res.data));
  } catch (error) {
    dispatch(addOrganizationFailed(error.response.data));
  }
};
