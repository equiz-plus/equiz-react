import {
  CLEAR_DELETE_QUESTION,
  DELETE_QUESTION_FAILED,
  DELETE_QUESTION_LOADING,
  DELETE_QUESTION_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  data: undefined,
  errorMsg: undefined,
};

const deleteQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_QUESTION_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload,
      };

    case DELETE_QUESTION_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMsg: action.payload,
      };

    case CLEAR_DELETE_QUESTION:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default deleteQuestionReducer;
