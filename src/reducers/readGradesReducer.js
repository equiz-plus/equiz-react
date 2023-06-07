import {
  READ_GRADES_USER_FAILED,
  READ_GRADES_USER_LOADING,
  READ_GRADES_USER_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  grades: [],
  errorMsg: undefined,
};

const readGradesReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_GRADES_USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case READ_GRADES_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        grades: action.payload,
      };

    case READ_GRADES_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload,
      };

    default:
      return initialState;
  }
};

export default readGradesReducer;
