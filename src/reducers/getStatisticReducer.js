import {
  GET_STATISTICS_FAILED,
  GET_STATISTICS_LOADING,
  GET_STATISTICS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  statistic: {},
  isError: false,
  isLoading: false,
  errorMessage: undefined,
};

export default function getStatisticReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STATISTICS_SUCCESS:
      return {
        ...state,
        statistic: action.payload,
        isError: false,
        isLoading: false,
        errorMessage: undefined,
      };
    case GET_STATISTICS_FAILED:
      return {
        ...state,
        statistic: {},
        isError: true,
        isLoading: false,
        errorMessage: action.payload,
      };
    case GET_STATISTICS_LOADING:
      return {
        ...state,
        statistic: {},
        isError: false,
        isLoading: true,
      };
    default:
      return state;
  }
}
