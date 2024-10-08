import { createExamMiddleware } from "./creators/addExamCreator";
import {
  answerExamMiddleware,
  clearAnswerExamMiddleware,
} from "./creators/answerExamCreator";
import { confirmMiddleware } from "./creators/confirmCreator";
import {
  cleardeleteExamMiddleware,
  deleteExamMiddleware,
} from "./creators/deleteExamCreator";
import { editExamMiddleware } from "./creators/editExamCreator";
import { endExamMiddleware } from "./creators/endExamCreator";
import { detailExamMiddleware } from "./creators/examDetailCreator";
import {
  clearGetSessionMiddleware,
  getSessionMiddleware,
} from "./creators/getSessionCreator";
import { loginMiddleware } from "./creators/loginCreator";
import {
  clearPatchExamMiddleware,
  patchExamMiddleware,
} from "./creators/patchExamCreator";
import { readCategoriesMiddleware } from "./creators/readCategoriesCreator";
import { readExamsMiddleware } from "./creators/readExamsCreator";
import { registerMiddleware } from "./creators/registerCreator";
import { startDetailMiddleware } from "./creators/startDetailCreator";
import { startExamMiddleware } from "./creators/startExamCreator";

import { createOrganizationMiddleware } from "./creators/addOrganizationCreator";
import { deleteOrganizationMiddleware } from "./creators/deleteOrganizationCreator";
import {
  clearDeleteQuestionsMiddleware,
  deleteQuestionMiddleware,
} from "./creators/deleteQuestionCreator";
import { editOrganizationMiddleware } from "./creators/editOrganizationCreator";
import { editUserDetailMiddleware } from "./creators/editUserDetailCreator";
import { generateTokenMidtrans } from "./creators/generateTokenMidtrans";
import { readOrgIdMiddleware } from "./creators/organizationDetailCreator";
import { readOrganizationMiddleware } from "./creators/readOrganizationsCreator";
import { readQuestionsMiddleware } from "./creators/readQuestionsCreator";
import { readStudentsMiddleware } from "./creators/readStudentsCreator";

import { addCategoryMiddleware } from "./creators/addCategoryCreator";
import { addQuestionMiddleware } from "./creators/addQuestionCreator";
import { readCertificatesMiddleware } from "./creators/readCertificatesCreator";

import { getStatisticsMiddleware } from "./creators/getStatisticCreator";
import { readCertificateIdMiddleware } from "./creators/readCertificatesIdCreator";
import { userReadGradesMiddleware } from "./creators/readGradesCreator";
import { readUserDetailMiddleware } from "./creators/readUserDetailsCreator";
import { createExamScheduleMiddleware } from "./creators/addScheduleCreator";
import { editScheduleMiddleware } from "./creators/editScheduleCreator";
import { getScheduleDetailMiddleware } from "./creators/getScheduleDetailCreator";
import { readSchedulessMiddleware } from "./creators/readSchedulesCreator";
import { readGradeDetailMiddleware } from "./creators/readGradeDetailCreator";
import { scrollDownMiddleware } from "./creators/scrollDownCreator";
import {
  clearDeleteScheduleMiddleware,
  deleteScheduleMiddleware,
} from "./creators/deleteScheduleCreator";

export const actionLogin = loginMiddleware;
export const actionRegister = registerMiddleware;
export const actionConfirm = confirmMiddleware;

export const actionReadExams = readExamsMiddleware;
export const actionCreateExam = createExamMiddleware;
export const actionDetailExam = detailExamMiddleware;
export const actionEditExam = editExamMiddleware;
export const actionPatchExam = patchExamMiddleware;
export const actionClearPatchExam = clearPatchExamMiddleware;
export const actionDeleteExam = deleteExamMiddleware;
export const actionClearDeleteExam = cleardeleteExamMiddleware;
export const actionStartDetail = startDetailMiddleware;
export const actionStartExam = startExamMiddleware;
export const actionGetSession = getSessionMiddleware;
export const actionClearGetSession = clearGetSessionMiddleware;
export const actionAnswerExam = answerExamMiddleware;
export const actionClearAnswerExam = clearAnswerExamMiddleware;
export const actionEndExam = endExamMiddleware;

export const actionReadOrganizations = readOrganizationMiddleware;
export const actionCreateOrganization = createOrganizationMiddleware;
export const actionDeleteOrganization = deleteOrganizationMiddleware;
export const actionEditOrganization = editOrganizationMiddleware;
export const actionReadOrgById = readOrgIdMiddleware;

export const actionReadUserDetail = readUserDetailMiddleware;
export const actionEditUserDetail = editUserDetailMiddleware;

export const actionReadStudents = readStudentsMiddleware;

export const actionReadQuestions = readQuestionsMiddleware;
export const actionDeleteQuestions = deleteQuestionMiddleware;
export const actionClearDeleteQuestions = clearDeleteQuestionsMiddleware;
export const actionCreateQuestions = addQuestionMiddleware;

export const actionReadCertificates = readCertificatesMiddleware;
export const actionReadCertificateId = readCertificateIdMiddleware;

export const actionMidtransPayment = generateTokenMidtrans;

export const actionReadCategories = readCategoriesMiddleware;

export const actionCreateExamSchedule = createExamScheduleMiddleware;
export const actionGetScheduleDetail = getScheduleDetailMiddleware;
export const actionEditExamSchedule = editScheduleMiddleware;
export const actionReadSchedules = readSchedulessMiddleware;
export const actionDeleteSchedule = deleteScheduleMiddleware;
export const actionClearDeleteSchedule = clearDeleteScheduleMiddleware;

export const actionCreateCategory = addCategoryMiddleware;

export const actionUserReadGrades = userReadGradesMiddleware;
export const actionReadGradeDetail = readGradeDetailMiddleware;

export const actionGetStatistic = getStatisticsMiddleware;

export const actionScrollDown = scrollDownMiddleware;
