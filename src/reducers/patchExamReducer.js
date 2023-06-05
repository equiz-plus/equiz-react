import {
  CLEAR_PATCH_EXAM,
  PATCH_EXAM_ERROR,
  PATCH_EXAM_LOADING,
  PATCH_EXAM_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: undefined,
};

const patchExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case PATCH_EXAM_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PATCH_EXAM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case PATCH_EXAM_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };
    case CLEAR_PATCH_EXAM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default patchExamReducer;
