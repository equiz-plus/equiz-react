import {
  GET_SCHEDULE_DETAIL_ERROR,
  GET_SCHEDULE_DETAIL_LOADING,
  GET_SCHEDULE_DETAIL_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  scheduleDetail: undefined,
  errorMessage: undefined,
};

const scheduleDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHEDULE_DETAIL_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SCHEDULE_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        scheduleDetail: action.payload,
      };
    case GET_SCHEDULE_DETAIL_ERROR:
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

export default scheduleDetailReducer;
