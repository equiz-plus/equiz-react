/* eslint-disable no-unused-vars */
import axios from "axios";
import {
  GENERATE_TOKEN_MIDTRANS_FAILED,
  GENERATE_TOKEN_MIDTRANS_LOADING,
  GENERATE_TOKEN_MIDTRANS_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";

export const generateTokenMitransAction = (data) => ({
  type: GENERATE_TOKEN_MIDTRANS_SUCCESS,
  payload: data,
});

export const generateTokenMitransActionLoading = () => ({
  type: GENERATE_TOKEN_MIDTRANS_LOADING,
});

export const generateTokenMitransActionError = (error) => ({
  type: GENERATE_TOKEN_MIDTRANS_FAILED,
  payload: error,
});

export const generateTokenMidtrans = (length) => async (dispatch) => {
  try {
    dispatch(generateTokenMitransActionLoading());
    const { data } = await axios({
      method: "post",
      url: baseUrl + "/payment/pay",
      data: {
        length: length,
      },
      headers: {
        access_token: localStorage.access_token,
      },
    });

    // console.log(data.paymentUrl);

    // const callback = data.paymentUrl;

    // window.snap.pay(data.token, {
    //   onSuccess: function (result) {
    //     /* You may add your own implementation here */
    //     callback();
    //   },
    // });

    dispatch(generateTokenMitransAction(data));
  } catch (err) {
    // console.log(err);
    dispatch(generateTokenMitransActionError(err.response.data));
  }
};
