import {
  READ_CERTIFICATES_FAILED,
  READ_CERTIFICATES_LOADING,
  READ_CERTIFICATES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  totalPages: 0,
  totalRows: 0,
  certificates: [],
  errorMsg: "",
};

const readCertificatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_CERTIFICATES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case READ_CERTIFICATES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        certificates: action.payload,
      };

    case READ_CERTIFICATES_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload,
      };
    default:
      return initialState;
  }
};

export default readCertificatesReducer;
