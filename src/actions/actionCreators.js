import { createExamMiddleware } from "./creators/addExamCreator";
import { confirmMiddleware } from "./creators/confirmCreator";
import { editExamMiddleware } from "./creators/editExamCreator";
import { detailExamMiddleware } from "./creators/examDetailCreator";
import { loginMiddleware } from "./creators/loginCreator";
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

export const actionReadCategories = readCategoriesMiddleware;
