// AUTH
export const LOGIN_SUCCESS = "login/postLogin";
export const LOGIN_LOADING = "login/postLoginLoading";
export const LOGIN_FAILED = "login/postLoginFailed";

export const REGISTER_SUCCESS = "register/postRegister";
export const REGISTER_LOADING = "register/postRegisterLoading";
export const REGISTER_FAILED = "register/postRegisterFailed";

export const CONFIRM_SUCCESS = "register/confirmAccount";
export const CONFIRM_LOADING = "register/confirmAccountLoading";
export const CONFIRM_FAILED = "register/confirmAccountFailed";

// EXAMS
export const READ_EXAMS_SUCCESS = "exams/readExams";
export const READ_EXAMS_LOADING = "exams/readExamsLoading";
export const READ_EXAMS_ERROR = "exams/readExamsError";

export const DETAIL_EXAMS_SUCCESS = "exams/detailExam";
export const DETAIL_EXAMS_LOADING = "exams/detailExamLoading";
export const DETAIL_EXAMS_ERROR = "exams/detailExamError";

export const CREATE_EXAM_SUCCESS = "exams/createExam";
export const CREATE_EXAM_LOADING = "exams/createExamLoading";
export const CREATE_EXAM_ERROR = "exams/createExamError";

export const EDIT_EXAM_SUCCESS = "exams/editExam";
export const EDIT_EXAM_LOADING = "exams/editExamLoading";
export const EDIT_EXAM_ERROR = "exams/editExamError";

export const PATCH_EXAM_SUCCESS = "exams/patchExam";
export const PATCH_EXAM_LOADING = "exams/patchExamLoading";
export const PATCH_EXAM_ERROR = "exams/patchExamError";
export const CLEAR_PATCH_EXAM = "exams/patchExamClear";

export const DELETE_EXAM_SUCCESS = "exams/deleteExam";
export const DELETE_EXAM_LOADING = "exams/deleteExamLoading";
export const DELETE_EXAM_ERROR = "exams/deleteExamError";
export const CLEAR_DELETE_EXAM = "exams/deleteExamClear";

export const START_DETAIL_SUCCESS = "exams/startDetail";
export const START_DETAIL_LOADING = "exams/startDetailLoading";
export const START_DETAIL_ERROR = "exams/startDetailError";

export const START_EXAM_SUCCESS = "exams/startExam";
export const START_EXAM_LOADING = "exams/startExamLoading";
export const START_EXAM_ERROR = "exams/startExamError";
export const CLEAR_START_EXAM = "exams/clearStartExam";

export const GET_SESSION_SUCCESS = "exams/getSession";
export const GET_SESSION_LOADING = "exams/getSessionLoading";
export const GET_SESSION_ERROR = "exams/getSessionError";
export const CLEAR_GET_SESSION = "exams/clearGetSession";

export const ANSWER_EXAM_SUCCESS = "exams/answerExam";
export const ANSWER_EXAM_LOADING = "exams/answerExamLoading";
export const ANSWER_EXAM_ERROR = "exams/answerExamError";
export const CLEAR_ANSWER_EXAM = "exams/answerExamClear";

export const END_EXAM_SUCCESS = "exams/endExam";
export const END_EXAM_LOADING = "exams/endExamLoading";
export const END_EXAM_ERROR = "exams/endExamError";

// CATEGORIES
export const READ_CATEGORIES_SUCCESS = "categories/readCategories";
export const READ_CATEGORIES_LOADING = "categories/readCategoriesLoading";
export const READ_CATEGORIES_ERROR = "categories/readCategoriesError";

//ORGANIZATIONS
export const READ_ORGANIZATION_SUCCESS = "organizations/readSuccess";
export const READ_ORGANIZATION_LOADING = "organizations/readLoading";
export const READ_ORGANIZATION_ERROR = "organizations/readError";

export const CREATE_ORGANIZATION_SUCCESS = "organizations/createSuccess";
export const CREATE_ORGANIZATION_LOADING = "organizations/createLoading";
export const CREATE_ORGANIZATION_FAILED = "organizations/createFailed";

export const DELETE_ORGANIZATION_SUCCESS = "organizations/deleteSuccess";
export const DELETE_ORGANIZATION_FAILED = "organizations/deleteFailed";
export const DELETE_ORGANIZATION_LOADING = "organizations/deleteLoading";

export const EDIT_ORGANIZATION_SUCCESS = "organizations/editSuccess";
export const EDIT_ORGANIZATION_FAILED = "organizations/editFailed";
export const EDIT_ORGANIZATION_LOADING = "organizations/editLoading";

export const READ_ORG_ID_SUCCESS = "organizations/readByIdSuccess";
export const READ_ORG_ID_FAILED = "organizations/readByIdFailed";
export const READ_ORG_ID_LOADING = "organizations/readByIdLoading";

// STUDENT PROFILE
export const READ_USER_PROFILE_SUCCESS = "users/readUserSuccess";
export const READ_USER_PROFILE_FAILED = "users/readUserFailed";
export const READ_USER_PROFILE_LOADING = "users/readUserLoading";

export const EDIT_USER_PROFILE_SUCCESS = "users/editUserSuccess";
export const EDIT_USER_PROFILE_FAILED = "users/editUserFailed";
export const EDIT_USER_PROFILE_LOADING = "users/editUserLoading";

// QUESTIONS
export const READ_QUESTIONS_SUCCESS = "questions/readSuccess";
export const READ_QUESTIONS_FAILED = "questions/readFailed";
export const READ_QUESTIONS_LOADING = "questions/readLoading";

export const DELETE_QUESTION_SUCCESS = "questions/deleteSuccess";
export const DELETE_QUESTION_FAILED = "questions/deleteFailed";
export const DELETE_QUESTION_LOADING = "questions/deleteLoading";
export const CLEAR_DELETE_QUESTION = "questions/clearQuestion";

export const CREATE_QUESTION_SUCCESS = "questions/createSuccess";
export const CREATE_QUESTION_FAILED = "questions/createFailed";
export const CREATE_QUESTION_LOADING = "questions/createLoading";

// STUDENTS
export const READ_STUDENTS_SUCCESS = "students/readStudents";
export const READ_STUDENTS_FAILED = "students/readStudentsError";
export const READ_STUDENTS_LOADING = "students/readStudentsLoading";

// CERTIFICATES
export const READ_CERTIFICATES_SUCCESS = "certificates/readSuccess";
export const READ_CERTIFICATES_FAILED = "certificates/readFailed";
export const READ_CERTIFICATES_LOADING = "certificates/readLoading";

export const READ_CERTIFICATE_ID_SUCCESS = "certificates/idSuccess";
export const READ_CERTIFICATE_ID_FAILED = "certificates/idFailed";
export const READ_CERTIFICATE_ID_LOADING = "certificates/idLoading";

// CATEGORIES
export const CREATE_CATEGORY_SUCCESS = "categories/addSuccess";
export const CREATE_CATEGORY_FAILED = "categories/addFailed";
export const CREATE_CATEGORY_LOADING = "categories/addLoading";

// GENERATE TOKEN MIDTRANS
export const GENERATE_TOKEN_MIDTRANS_SUCCESS = "midtrans/generateTokenSuccess";
export const GENERATE_TOKEN_MIDTRANS_FAILED = "midtrans/generateTokenFailed";
export const GENERATE_TOKEN_MIDTRANS_LOADING = "midtrans/generateTokenLoading";

// EXAM SCHEDULE
export const CREATE_EXAM_SCHEDULE_SUCCESS = "exams/createScheduleSuccess";
export const CREATE_EXAM_SCHEDULE_LOADING = "exams/createScheduleLoading";
export const CREATE_EXAM_SCHEDULE_ERROR = "exams/createScheduleError";

export const GET_SCHEDULE_DETAIL_SUCCESS = "exams/getScheduleDetailSuccess";
export const GET_SCHEDULE_DETAIL_LOADING = "exams/getScheduleDetailLoading";
export const GET_SCHEDULE_DETAIL_ERROR = "exams/getScheduleDetailError";

export const EDIT_EXAM_SCHEDULE_SUCCESS = "exams/editScheduleSuccess";
export const EDIT_EXAM_SCHEDULE_LOADING = "exams/editScheduleLoading";
export const EDIT_EXAM_SCHEDULE_ERROR = "exams/editScheduleError";

export const READ_SCHEDULES_SUCCESS = "exams/readSchedulesSuccess";
export const READ_SCHEDULES_LOADING = "exams/readSchedulesLoading";
export const READ_SCHEDULES_ERROR = "exams/readSchedulesError";

export const DELETE_SCHEDULE_SUCCESS = "exams/deleteScheduleSuccess";
export const DELETE_SCHEDULE_LOADING = "exams/deleteScheduleLoading";
export const DELETE_SCHEDULE_ERROR = "exams/deleteScheduleError";
export const CLEAR_DELETE_SCHEDULE = "exams/clearDeleteSchedule";

// USER GRADES
export const READ_GRADES_USER_SUCCESS = "grades/userReadSucces";
export const READ_GRADES_USER_FAILED = "grades/userReadFailed";
export const READ_GRADES_USER_LOADING = "grades/userReadLoading";

export const READ_GRADE_DETAILS_SUCCESS = "grades/readDetailsSuccess";
export const READ_GRADE_DETAILS_FAILED = "grades/readDetailsFailed";
export const READ_GRADE_DETAILS_LOADING = "grades/readDetailsLoading";

// GET STATISTICS
export const GET_STATISTICS_SUCCESS = "statistics/getStatisticsSuccess";
export const GET_STATISTICS_FAILED = "statistics/getStatisticsFailed";
export const GET_STATISTICS_LOADING = "statistics/getStatisticsLoading";

// SCROLL DOWN WHEN CLICK GET PREMIUM
export const SCROLL_DOWN = "scrollDown/scrollDown";
export const CLEAR_SCROLL_DOWN = "scrollDown/clearScrollDown";
export const CLEAR_STATE = "state/clearState";
