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

import { readOrganizationMiddleware } from "./creators/readOrganizationsCreator";
import { createOrganizationMiddleware } from "./creators/addOrganizationCreator";
import { deleteOrganizationMiddleware } from "./creators/deleteOrganizationCreator";
import { editOrganizationMiddleware } from "./creators/editOrganizationCreator";

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

export const actionReadOrganizations = readOrganizationMiddleware;
export const actionCreateOrganization = createOrganizationMiddleware;
export const actionDeleteOrganization = deleteOrganizationMiddleware;
export const actionEditOrganization = editOrganizationMiddleware;

export const actionReadCategories = readCategoriesMiddleware;
