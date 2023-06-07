import {
  CREATE_QUESTION_FAILED,
  CREATE_QUESTION_LOADING,
  CREATE_QUESTION_SUCCESS,
} from "../actionTypes";

import { baseUrl } from "../baseUrl";
import axios from "axios";
import { answerExamAction } from "./answerExamCreator";

export const addQuestionSuccess = (data) => ({
  type: CREATE_QUESTION_SUCCESS,
  payload: data,
});

export const addQuestionFailed = (error) => ({
  type: CREATE_QUESTION_FAILED,
  payload: error,
});

export const addQuestionLoading = () => ({
  type: CREATE_QUESTION_LOADING,
});

export const addQuestionMiddleware = (data) => async (dispatch) => {
  try {
    dispatch(addQuestionLoading());
    const questionAnswer = {
      questionInput: {
        question: data.question,
        CategoryId: data.CategoryId,
      },
      answersInput: [
        {
          answer: data.answerA,
          isCorrect: +data.correctAnswer == 1 ? true : false,
          explanation: data.explanationA,
        },
        {
          answer: data.answerB,
          isCorrect: +data.correctAnswer == 2 ? true : false,
          explanation: data.explanationB,
        },
        {
          answer: data.answerC,
          isCorrect: +data.correctAnswer == 3 ? true : false,
          explanation: data.explanationC,
        },
        {
          answer: data.answerD,
          isCorrect: +data.correctAnswer == 4 ? true : false,
          explanation: data.explanationD,
        },
      ],
    };
    console.log(questionAnswer);
    const res = await axios.post(`${baseUrl}/questions`, questionAnswer, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    dispatch(addQuestionSuccess(res.data));
  } catch (error) {
    dispatch(addQuestionFailed(error));
  }
};
