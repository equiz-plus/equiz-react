import {
  READ_ORG_ID_FAILED,
  READ_ORG_ID_LOADING,
  READ_ORG_ID_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const readOrgIdSuccess = (data) => ({
  type: READ_ORG_ID_SUCCESS,
  payload: data,
});

export const readOrgIdFailed = (error) => ({
  type: READ_ORG_ID_SUCCESS,
  payload: error,
});

export const readOrgIdLoading = () => ({
  type: READ_ORG_ID_LOADING,
});

export const readOrgIdMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(readOrgIdLoading());

    const res = await axios.get(`${baseUrl}/organizations/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    dispatch(readOrgIdSuccess(res.data));
  } catch (error) {
    dispatch(readOrgIdFailed(error));
  }
};
