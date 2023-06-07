import {
  CLEAR_DELETE_SCHEDULE,
  DELETE_SCHEDULE_ERROR,
  DELETE_SCHEDULE_LOADING,
  DELETE_SCHEDULE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: undefined,
};

const deleteScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SCHEDULE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_SCHEDULE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case DELETE_SCHEDULE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };
    case CLEAR_DELETE_SCHEDULE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default deleteScheduleReducer;
