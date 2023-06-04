import {
  START_EXAM_ERROR,
  START_EXAM_LOADING,
  START_EXAM_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: undefined,
};

const startExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_EXAM_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case START_EXAM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case START_EXAM_ERROR:
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

export default startExamReducer;
