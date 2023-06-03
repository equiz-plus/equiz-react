import {
  CONFIRM,
  CONFIRM_FAILED,
  LOGIN,
  LOGIN_FAILED,
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

export const confirmActionError = (error) => ({
  type: CONFIRM_FAILED,
  payload: error,
});

export const confirmMiddleware = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/confirmation`, data);

    dispatch(confirmAction(res.data));
  } catch (error) {
    dispatch(confirmActionError(error));
  }
};
// ======= CONFIRMATION END =======

// ======= LOGIN =======
export const loginAction = (data) => ({
  type: LOGIN,
  payload: data,
});

export const loginActionError = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const loginMiddleware = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/login`, data);

    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("role", res.data.role);

    dispatch(loginAction(res.data));
  } catch (error) {
    dispatch(loginActionError(error));
  }
};
// ======= LOGIN END =======
