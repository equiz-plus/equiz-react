import {
  CREATE_EXAM_SCHEDULE_ERROR,
  CREATE_EXAM_SCHEDULE_LOADING,
  CREATE_EXAM_SCHEDULE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: undefined,
  errorMessage: undefined,
};

const createExamScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EXAM_SCHEDULE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_EXAM_SCHEDULE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload,
      };
    case CREATE_EXAM_SCHEDULE_ERROR:
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

export default createExamScheduleReducer;
