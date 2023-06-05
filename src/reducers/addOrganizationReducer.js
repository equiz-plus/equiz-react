import {
  CREATE_ORGANIZATION_FAILED,
  CREATE_ORGANIZATION_SUCCESS,
  CREATE_ORGANIZATION_LOADING,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  name: "",
  address: "",
  logo: "",
  pic: "",
  sign: "",
  prefix: "",
  errorMessage: "",
};

const createOrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORGANIZATION_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case CREATE_ORGANIZATION_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };

    case CREATE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        name: action.payload.name,
        address: action.payload.address,
        logo: action.payload.logo,
        pic: action.payload.pic,
        sign: action.payload.sign,
        prefix: action.payload.prefix,
      };

    default:
      return state;
  }
};

export default createOrganizationReducer;
