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

import addCategoryReducer from "../reducers/addCategoryReducer";
import addQuestionReducer from "../reducers/addQuestionReducer";
import readCertificatesReducer from "../reducers/readCertificatesReducer";

import getStatisticReducer from "../reducers/getStatisticReducer";
import midtransPaymentReducer from "../reducers/midtransPaymentReducer";
import readOrgByIdReducer from "../reducers/organizationDetailReducer";
import readCertificateIdReducer from "../reducers/readCertificateIdReducer";
import readGradesReducer from "../reducers/readGradesReducer";
import readOrganzationsReducer from "../reducers/readOrganizationsReducer";
import readQuestionReducer from "../reducers/readQuestionReducer";
import createExamScheduleReducer from "../reducers/addScheduleReducer";
import editExamScheduleReducer from "../reducers/editScheduleReducer";
import scheduleDetailReducer from "../reducers/scheduleDetailReducer";
import readSchedulesReducer from "../reducers/readSchedulesReducer";
import scrollDownReducer from "../reducers/scrollDownReducer";

// combine reducers
const appReducer = combineReducers({
  register: registerReducer,
  confirm: confirmReducer,
  login: loginReducer,
  readExams: readExamReducer,
  detailExam: examDetailReducer,
  readCategories: readCategoriesReducer,
  createCategories: addCategoryReducer,
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
  createQuestions: addQuestionReducer,

  readCertificates: readCertificatesReducer,
  readCertificatesId: readCertificateIdReducer,

  midtransPayment: midtransPaymentReducer,

  readStudents: readStudentsReducer,

  createSchedule: createExamScheduleReducer,
  scheduleDetail: scheduleDetailReducer,
  editSchedule: editExamScheduleReducer,
  readSchedules: readSchedulesReducer,

  readGrades: readGradesReducer,
  getStatistic: getStatisticReducer,

  scrollDown: scrollDownReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
