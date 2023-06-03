import {
  READ_EXAMS_ERROR,
  READ_EXAMS_LOADING,
  READ_EXAMS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  exams: undefined,
  totalPages: undefined,
};

const readExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_EXAMS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case READ_EXAMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        exams: action.payload.exams,
        totalPages: action.payload.totalPages,
      };
    case READ_EXAMS_ERROR:
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

export default readExamReducer;
