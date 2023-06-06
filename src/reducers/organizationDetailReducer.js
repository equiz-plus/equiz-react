import {
  READ_ORG_ID_FAILED,
  READ_ORG_ID_SUCCESS,
  READ_ORG_ID_LOADING,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  organizationDetail: undefined,
};

const readOrgByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_ORG_ID_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case READ_ORG_ID_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case READ_ORG_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        organizationDetail: action.payload,
      };

    default:
      return initialState;
  }
};

export default readOrgByIdReducer;
