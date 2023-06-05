import {
  END_EXAM_ERROR,
  END_EXAM_LOADING,
  END_EXAM_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: undefined,
};

const endExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case END_EXAM_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case END_EXAM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case END_EXAM_ERROR:
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

export default endExamReducer;
