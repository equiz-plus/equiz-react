import {
  ANSWER_EXAM_ERROR,
  ANSWER_EXAM_LOADING,
  ANSWER_EXAM_SUCCESS,
  CLEAR_ANSWER_EXAM,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: undefined,
};

const answerExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANSWER_EXAM_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ANSWER_EXAM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case ANSWER_EXAM_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };
    case CLEAR_ANSWER_EXAM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default answerExamReducer;
