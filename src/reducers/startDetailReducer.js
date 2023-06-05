import {
  START_DETAIL_ERROR,
  START_DETAIL_LOADING,
  START_DETAIL_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  examDetail: undefined,
  errorMessage: undefined,
};

const startDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_DETAIL_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case START_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        examDetail: action.payload,
      };
    case START_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
};

export default startDetailReducer;
