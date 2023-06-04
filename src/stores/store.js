import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { CLEAR_STATE } from "../actions/actionTypes";
import registerReducer from "../reducers/registerReducer";
import confirmReducer from "../reducers/confirmReducer";
import loginReducer from "../reducers/loginReducer";
import readExamReducer from "../reducers/readExamReducer";
import readCategoriesReducer from "../reducers/readCategoriesReducer";
import addExamReducer from "../reducers/addExamReducer";
import examDetailReducer from "../reducers/examDetailReducer";
import editExamReducer from "../reducers/editExamReducer";
import patchExamReducer from "../reducers/patchExamReducer";
import deleteExamReducer from "../reducers/deleteExamReducer";

import readOrganzationsReducer from "../reducers/readOrganizationsReducer";
import createOrganizationReducer from "../reducers/addOrganizationReducer";
import deleteOrganizationReducer from "../reducers/deleteOrganizationReducer";
import editOrganizationReducer from "../reducers/editOrganizationReducer";

// combine reducers
const appReducer = combineReducers({
  register: registerReducer,
  confirm: confirmReducer,
  login: loginReducer,
  readExams: readExamReducer,
  detailExam: examDetailReducer,
  readCategories: readCategoriesReducer,
  createExam: addExamReducer,
  editExam: editExamReducer,
  patchExam: patchExamReducer,
  deleteExam: deleteExamReducer,
  readOrganizations: readOrganzationsReducer,
  createOrganizations: createOrganizationReducer,
  deleteOrganizations: deleteOrganizationReducer,
  editOrganizations: editOrganizationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
