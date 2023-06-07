import {
  READ_ORGANIZATION_ERROR,
  READ_ORGANIZATION_LOADING,
  READ_ORGANIZATION_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  organizations: [],
};

const readOrganzationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_ORGANIZATION_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case READ_ORGANIZATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        organizations: action.payload.organizations,
      };

    case READ_ORGANIZATION_ERROR:
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

export default readOrganzationsReducer;
