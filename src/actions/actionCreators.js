import {
  CONFIRM,
  CONFIRM_FAILED,
  REGISTER,
  REGISTER_FAILED,
} from "./actionTypes";

const baseUrl = "http://localhost:3000";
import axios from "axios";

// ======= REGISTER =======
export const registerAction = (registered) => ({
  type: REGISTER,
  payload: registered,
});

export const registerActionError = (error) => ({
  type: REGISTER_FAILED,
  payload: error,
});

export const registerMiddleware = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/register`, data);

    localStorage.setItem("email", data.email);

    dispatch(registerAction(res.data));
  } catch (error) {
    dispatch(registerActionError(error));
  }
};
// ======= REGISTER END =======

// ======= CONFIRMATION =======
export const confirmAction = (confirmed) => ({
  type: CONFIRM,
  payload: confirmed,
});

export const confirmActionFailed = (error) => ({
  type: CONFIRM_FAILED,
  payload: error,
});

export const confirmMiddleware = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/confirmation`, data);
    dispatch(registerAction(res.data));
  } catch (error) {
    dispatch(registerActionError(error));
  }
};
// ======= CONFIRMATION END =======
