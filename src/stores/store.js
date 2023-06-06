import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { CLEAR_STATE } from "../actions/actionTypes";
import addExamReducer from "../reducers/addExamReducer";
import answerExamReducer from "../reducers/answerExamReducer";
import confirmReducer from "../reducers/confirmReducer";
import deleteExamReducer from "../reducers/deleteExamReducer";
import editExamReducer from "../reducers/editExamReducer";
import endExamReducer from "../reducers/endExamReducer";
import examDetailReducer from "../reducers/examDetailReducer";
import getSessionReducer from "../reducers/getSessionReducer";
import loginReducer from "../reducers/loginReducer";
import patchExamReducer from "../reducers/patchExamReducer";
import readCategoriesReducer from "../reducers/readCategoriesReducer";
import readExamReducer from "../reducers/readExamReducer";
import registerReducer from "../reducers/registerReducer";
import startDetailReducer from "../reducers/startDetailReducer";
import startExamReducer from "../reducers/startExamReducer";

import userDetailReducer from "../reducers/UserDetailReducer";
import createOrganizationReducer from "../reducers/addOrganizationReducer";
import deleteOrganizationReducer from "../reducers/deleteOrganizationReducer";
import deleteQuestionReducer from "../reducers/deleteQuestionReducer";
import editOrganizationReducer from "../reducers/editOrganizationReducer";
import editUserDetailReducer from "../reducers/editUserDetailReducer";
import readStudentsReducer from "../reducers/getStudentsReducer";
import midtransPaymentReducer from "../reducers/midtransPaymentReducer";
import readOrgByIdReducer from "../reducers/organizationDetailReducer";
import readOrganzationsReducer from "../reducers/readOrganizationsReducer";
import readQuestionReducer from "../reducers/readQuestionReducer";

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
  readOrgById: readOrgByIdReducer,

  startDetail: startDetailReducer,
  startExam: startExamReducer,
  getSession: getSessionReducer,
  answerExam: answerExamReducer,
  endExam: endExamReducer,

  readUserDetail: userDetailReducer,
  editUserDetail: editUserDetailReducer,

  readQuestions: readQuestionReducer,
  deleteQuestions: deleteQuestionReducer,

  midtransPayment: midtransPaymentReducer,

  readStudents: readStudentsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
