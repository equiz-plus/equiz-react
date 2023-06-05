import {
  DETAIL_EXAMS_ERROR,
  DETAIL_EXAMS_LOADING,
  DETAIL_EXAMS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  examDetail: undefined,
};

const examDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_EXAMS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DETAIL_EXAMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        examDetail: action.payload,
      };
    case DETAIL_EXAMS_ERROR:
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

export default examDetailReducer;
