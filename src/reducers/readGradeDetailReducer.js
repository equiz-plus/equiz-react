import {
  READ_GRADE_DETAILS_FAILED,
  READ_GRADE_DETAILS_SUCCESS,
  READ_GRADE_DETAILS_LOADING,
} from "../actions/actionTypes";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  answers: [],
  errorMessage: undefined,
};

const readGradeDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_GRADE_DETAILS_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
        errorMessage: action.payload,
      };

    case READ_GRADE_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        answers: action.payload.answers,
      };

    case READ_GRADE_DETAILS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return initialState;
  }
};

export default readGradeDetailReducer;
