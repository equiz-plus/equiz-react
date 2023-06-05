import axios from "axios";
import { baseUrl } from "../baseUrl";
import {
  READ_CATEGORIES_ERROR,
  READ_CATEGORIES_LOADING,
  READ_CATEGORIES_SUCCESS,
} from "../actionTypes";

export const readCategoriesAction = (data) => ({
  type: READ_CATEGORIES_SUCCESS,
  payload: data,
});

export const readCategoriesActionLoading = () => ({
  type: READ_CATEGORIES_LOADING,
});

export const readCategoriesActionError = (error) => ({
  type: READ_CATEGORIES_ERROR,
  payload: error,
});

export const readCategoriesMiddleware = () => async (dispatch) => {
  try {
    dispatch(readCategoriesActionLoading());

    const res = await axios.get(`${baseUrl}/categories`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(readCategoriesAction(res.data));
  } catch (error) {
    dispatch(readCategoriesActionError(error.response.data.message));
  }
};
