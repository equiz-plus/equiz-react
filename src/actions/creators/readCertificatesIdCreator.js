import {
  READ_CERTIFICATE_ID_FAILED,
  READ_CERTIFICATE_ID_LOADING,
  READ_CERTIFICATE_ID_SUCCESS,
} from "../actionTypes";

import axios from "axios";
import { baseUrl } from "../baseUrl";

export const readByIdSuccess = (data) => ({
  type: READ_CERTIFICATE_ID_SUCCESS,
  payload: data,
});

export const readByIdFailed = (error) => ({
  type: READ_CERTIFICATE_ID_FAILED,
  payload: error,
});

export const readByIdLoading = () => ({
  type: READ_CERTIFICATE_ID_LOADING,
});

export const readCertificateIdMiddleware = (slug) => async (dispatch) => {
  try {
    dispatch(readByIdLoading());

    const res = await axios.get(`${baseUrl}/certificates/${slug}`);
    dispatch(readByIdSuccess(res.data));
  } catch (error) {
    dispatch(readByIdFailed(error));
  }
};
