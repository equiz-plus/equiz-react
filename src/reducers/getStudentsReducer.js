import {
  READ_STUDENTS_FAILED,
  READ_STUDENTS_LOADING,
  READ_STUDENTS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  students: undefined,
  errorMessage: undefined,
};

const readStudentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_STUDENTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case READ_STUDENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        students: action.payload.users,
      };
    case READ_STUDENTS_FAILED:
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

export default readStudentsReducer;
