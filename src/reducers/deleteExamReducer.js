import {
  CLEAR_DELETE_EXAM,
  DELETE_EXAM_ERROR,
  DELETE_EXAM_LOADING,
  DELETE_EXAM_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: undefined,
};

const deleteExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_EXAM_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_EXAM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case DELETE_EXAM_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };
    case CLEAR_DELETE_EXAM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default deleteExamReducer;
