import {
  READ_QUESTIONS_FAILED,
  READ_QUESTIONS_LOADING,
  READ_QUESTIONS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  questions: [],
  totalPages: undefined,
  errorMsg: "",
};

const readQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_QUESTIONS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case READ_QUESTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        questions: action.payload.questions,
        totalPages: action.payload.totalPages,
      };

    case READ_QUESTIONS_FAILED:
      return {
        ...state,
        isLoading: false,
        isFailed: true,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default readQuestionReducer;
