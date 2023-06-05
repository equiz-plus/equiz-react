import {
  READ_USER_PROFILE_FAILED,
  READ_USER_PROFILE_LOADING,
  READ_USER_PROFILE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  userDetails: undefined,
  errorMsg: undefined,
};

const userDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_USER_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload,
      };

    case READ_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        userDetails: action.payload,
      };

    case READ_USER_PROFILE_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default userDetailReducer;
