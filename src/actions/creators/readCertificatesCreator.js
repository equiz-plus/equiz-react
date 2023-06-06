import {
  READ_CERTIFICATES_FAILED,
  READ_CERTIFICATES_LOADING,
  READ_CERTIFICATES_SUCCESS,
} from "../actionTypes";
import axios from "axios";
import { baseUrl } from "../baseUrl";

export const readCertificatesLoading = () => ({
  type: READ_CERTIFICATES_LOADING,
});

export const readCertificatesSuccess = (data) => ({
  type: READ_CERTIFICATES_SUCCESS,
  payload: data,
});

export const readCertificatesFailed = (error) => ({
  type: READ_CERTIFICATES_FAILED,
  payload: error,
});

export const readCertificatesMiddleware = () => async (dispatch) => {
  try {
    dispatch(readCertificatesLoading());

    const res = await axios.get(`${baseUrl}/certificates`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(readCertificatesSuccess(res.data));
  } catch (error) {
    dispatch(readCertificatesFailed(error));
  }
};
