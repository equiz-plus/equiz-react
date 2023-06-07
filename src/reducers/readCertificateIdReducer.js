import {
  READ_CERTIFICATE_ID_FAILED,
  READ_CERTIFICATE_ID_LOADING,
  READ_CERTIFICATE_ID_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  certificateById: undefined,
  errorMessage: undefined,
};

const readCertificateIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_CERTIFICATE_ID_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
        errorMessage: action.payload,
      };

    case READ_CERTIFICATE_ID_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case READ_CERTIFICATE_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        certificateById: action.payload,
      };

    default:
      return initialState;
  }
};

export default readCertificateIdReducer;
