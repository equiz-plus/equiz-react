import {
  EDIT_USER_PROFILE_FAILED,
  EDIT_USER_PROFILE_LOADING,
  EDIT_USER_PROFILE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  userNewData: undefined,
  errorMessage: undefined,
};

const editUserDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER_PROFILE_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case EDIT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        userNewData: action.payload,
      };

    case EDIT_USER_PROFILE_FAILED:
      return {
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };

    default:
      return state;
  }
};

export default editUserDetailReducer;
