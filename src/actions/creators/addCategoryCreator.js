import {
  CREATE_CATEGORY_FAILED,
  CREATE_CATEGORY_LOADING,
  CREATE_CATEGORY_SUCCESS,
} from "../actionTypes";
import axios from "axios";
import { baseUrl } from "../baseUrl";

export const addCategoryLoading = () => ({
  type: CREATE_CATEGORY_LOADING,
});

export const addCategorySuccess = (data) => ({
  type: CREATE_CATEGORY_SUCCESS,
  payload: data,
});

export const addCategoryFailed = (error) => ({
  type: CREATE_CATEGORY_FAILED,
  payload: error,
});

export const addCategoryMiddleware = (category) => async (dispatch) => {
  try {
    dispatch(addCategoryLoading());

    const res = await axios.post(`${baseUrl}/categories`, category, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(addCategorySuccess(res.data));
  } catch (error) {
    dispatch(addCategoryFailed(error));
  }
};
