import {
  GENERATE_TOKEN_MIDTRANS_FAILED,
  GENERATE_TOKEN_MIDTRANS_LOADING,
  GENERATE_TOKEN_MIDTRANS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  paymentData: {},
  errorMessage: undefined,
};

const midtransPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_TOKEN_MIDTRANS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GENERATE_TOKEN_MIDTRANS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        paymentData: action.payload,
      };
    case GENERATE_TOKEN_MIDTRANS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default midtransPaymentReducer;
