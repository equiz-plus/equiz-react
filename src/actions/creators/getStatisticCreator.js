import axios from "axios";
import {
  GET_STATISTICS_FAILED,
  GET_STATISTICS_LOADING,
  GET_STATISTICS_SUCCESS,
} from "../actionTypes";
import { baseUrl } from "../baseUrl";

export const getStatisticsSuccess = (data) => ({
  type: GET_STATISTICS_SUCCESS,
  payload: data,
});

export const getStatisticsLoading = () => ({
  type: GET_STATISTICS_LOADING,
});

export const getStatisticsFailed = (error) => ({
  type: GET_STATISTICS_FAILED,
  payload: error,
});

export const getStatisticsMiddleware = () => async (dispatch) => {
  try {
    dispatch(getStatisticsLoading());

    const res = await axios.get(`${baseUrl}/statistics`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(getStatisticsSuccess(res.data));
  } catch (error) {
    dispatch(getStatisticsFailed(error.response.data));
  }
};
