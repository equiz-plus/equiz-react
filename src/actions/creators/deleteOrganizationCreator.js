import {
  DELETE_ORGANIZATION_FAILED,
  DELETE_ORGANIZATION_LOADING,
  DELETE_ORGANIZATION_SUCCESS,
} from "../actionTypes";

import { baseUrl } from "../baseUrl";

export const deleteOrganizationLoading = () => ({
  type: DELETE_ORGANIZATION_LOADING,
});

export const deleteOrganizationSuccess = () => ({
  type: DELETE_ORGANIZATION_SUCCESS,
});

export const deleteOrganizationFailed = (error) => ({
  type: DELETE_ORGANIZATION_FAILED,
  payload: error,
});

export const deleteOrganizationMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(deleteOrganizationLoading);

    await axios.delete(`${baseUrl}/organizations/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(deleteOrganizationSuccess());
  } catch (error) {
    dispatch(deleteOrganizationFailed(error));
  }
};
