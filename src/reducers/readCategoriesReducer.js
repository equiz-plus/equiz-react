import {
  READ_CATEGORIES_ERROR,
  READ_CATEGORIES_LOADING,
  READ_CATEGORIES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  categories: undefined,
};

const readExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case READ_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        categories: action.payload.categories,
      };
    case READ_CATEGORIES_ERROR:
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

export default readExamReducer;
