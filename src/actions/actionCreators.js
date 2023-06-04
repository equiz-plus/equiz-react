import { createExamMiddleware } from "./creators/addExamCreator";
import { confirmMiddleware } from "./creators/confirmCreator";
import {
  cleardeleteExamMiddleware,
  deleteExamMiddleware,
} from "./creators/deleteExamCreator";
import { editExamMiddleware } from "./creators/editExamCreator";
import { detailExamMiddleware } from "./creators/examDetailCreator";
import { loginMiddleware } from "./creators/loginCreator";
import {
  clearPatchExamMiddleware,
  patchExamMiddleware,
} from "./creators/patchExamCreator";
import { readCategoriesMiddleware } from "./creators/readCategoriesCreator";
import { readExamsMiddleware } from "./creators/readExamsCreator";
import { registerMiddleware } from "./creators/registerCreator";

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

export const actionReadCategories = readCategoriesMiddleware;
