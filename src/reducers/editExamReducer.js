import {
  EDIT_EXAM_ERROR,
  EDIT_EXAM_LOADING,
  EDIT_EXAM_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  examData: undefined,
  errorMessage: undefined,
};

const editExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EXAM_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_EXAM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        examData: action.payload,
      };
    case EDIT_EXAM_ERROR:
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

export default editExamReducer;
