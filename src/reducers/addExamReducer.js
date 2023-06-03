import {
  CREATE_EXAM_ERROR,
  CREATE_EXAM_LOADING,
  CREATE_EXAM_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  title: undefined,
  errorMessage: undefined,
};

const createExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EXAM_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_EXAM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        title: action.payload.title,
      };
    case CREATE_EXAM_ERROR:
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

export default createExamReducer;
