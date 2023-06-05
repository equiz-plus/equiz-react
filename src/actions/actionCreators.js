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
import { detailExamMiddleware } from "./creators/examDetailCreator";
import { getSessionMiddleware } from "./creators/getSessionCreator";
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
export const actionAnswerExam = answerExamMiddleware;
export const actionClearAnswerExam = clearAnswerExamMiddleware;

export const actionReadCategories = readCategoriesMiddleware;
