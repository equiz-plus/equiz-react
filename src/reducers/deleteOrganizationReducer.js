import {
  DELETE_ORGANIZATION_FAILED,
  DELETE_ORGANIZATION_LOADING,
  DELETE_ORGANIZATION_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: undefined,
};

const deleteOrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ORGANIZATION_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_ORGANIZATION_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };

    case DELETE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };

    default:
      return state;
  }
};

export default deleteOrganizationReducer;
