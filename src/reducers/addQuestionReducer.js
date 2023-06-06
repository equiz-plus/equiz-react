import {
  CREATE_QUESTION_FAILED,
  CREATE_QUESTION_LOADING,
  CREATE_QUESTION_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  newQuestion: undefined,
  CategoryId: undefined,
  errorMsg: undefined,
};

const addQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QUESTION_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
        errorMsg: action.payload,
      };

    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        newQuestion: action.payload.question,
        CategoryId: action.payload.CategoryId,
      };

    case CREATE_QUESTION_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return initialState;
  }
};

export default addQuestionReducer;
