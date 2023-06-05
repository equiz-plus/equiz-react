import {
  EDIT_ORGANIZATION_FAILED,
  EDIT_ORGANIZATION_LOADING,
  EDIT_ORGANIZATION_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  organizationData: undefined,
  errorMessage: undefined,
};

const editOrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ORGANIZATION_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case EDIT_ORGANIZATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        organizationData: action.payload,
      };

    case EDIT_ORGANIZATION_FAILED:
      return {
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };

    default:
      return state;
  }
};

export default editOrganizationReducer;
