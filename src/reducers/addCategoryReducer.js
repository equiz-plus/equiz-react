import {
  CREATE_CATEGORY_FAILED,
  CREATE_CATEGORY_LOADING,
  CREATE_CATEGORY_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isError: false,
  isSuccess: false,
  isSuccess: false,
  category: undefined,
  errorMsg: undefined,
};

const addCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        category: action.payload,
      };

    case CREATE_CATEGORY_FAILED:
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

export default addCategoryReducer;
