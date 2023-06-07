import {
  READ_SCHEDULES_ERROR,
  READ_SCHEDULES_LOADING,
  READ_SCHEDULES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  schedules: undefined,
  errorMessage: undefined,
};

const readSchedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_SCHEDULES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case READ_SCHEDULES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        schedules: action.payload,
      };
    case READ_SCHEDULES_ERROR:
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

export default readSchedulesReducer;
