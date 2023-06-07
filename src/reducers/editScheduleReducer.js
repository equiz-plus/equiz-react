import {
  EDIT_EXAM_SCHEDULE_ERROR,
  EDIT_EXAM_SCHEDULE_LOADING,
  EDIT_EXAM_SCHEDULE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: undefined,
  errorMessage: undefined,
};

const editExamScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EXAM_SCHEDULE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_EXAM_SCHEDULE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload,
      };
    case EDIT_EXAM_SCHEDULE_ERROR:
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

export default editExamScheduleReducer;
