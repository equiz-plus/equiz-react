/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionAnswerExam,
  actionClearAnswerExam,
  actionEndExam,
  actionGetSession,
} from "../../../actions/actionCreators";
import Question from "../../../components/Question";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { CLEAR_STATE } from "../../../actions/actionTypes";
import CountdownComponent from "../../../components/timer";
import SpeechRecognition from "../../../components/speechRecognition";
import speechFeedback from "./speech";

function ExamQuestion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    dispatch(actionGetSession());
  }, []);

  const { session, errorMessage, isError } = useSelector(
    (state) => state.getSession
  );

  useEffect(() => {
    if (errorMessage === "Not Found") {
      MySwal.fire({
        title: <strong>Restricted access</strong>,
        html: <i>Session not found</i>,
        icon: "warning",
      });
      navigate("/students");
    }
  }, [isError]);

  const { no } = useParams();

  // ANSWER HANDLER
  const answerHandler = (questionNumber, QuestionId, AnswerId) => {
    const data = {
      AnswerId,
      QuestionId,
    };
    dispatch(actionAnswerExam(questionNumber, data));
  };

  const { isSuccess } = useSelector((state) => state.answerExam);

  // CHECKED ANSWERS
  useEffect(() => {
    dispatch(actionGetSession());
    dispatch(actionClearAnswerExam());
  }, [isSuccess]);

  const [userAnswers, setUserAnswers] = useState([]);
  const [answerNumber, setAnswerNumber] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(null);

  useEffect(() => {
    setUserAnswers(session?.Exam.UserAnswers.map((el) => el.AnswerId));
    setAnswerNumber(session?.Exam.UserAnswers.map((el) => el.questionNumber));
    setTotalQuestions(session?.QuestionGroups.length);
  }, [session]);

  // END EXAM
  const forceEndExam = () => {
    dispatch(actionEndExam());
  };

  const endExam = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to retake the test",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(actionEndExam());
      }
    });
  };

  const {
    isSuccess: successEnd,
    isLoading: loadingEnd,
    isError: errorEnd,
    errorMessage: endErrorMessage,
  } = useSelector((state) => state.endExam);

  useEffect(() => {
    if (successEnd) {
      navigate("/students");
      MySwal.fire({
        title: <strong>Exam Ended</strong>,
        html: <i>Exam has ended, please check your grades</i>,
        icon: "warning",
      });
    } else if (errorEnd) {
      MySwal.fire({
        title: <strong>Error!</strong>,
        html: <i>{endErrorMessage}</i>,
        icon: "error",
      });
    }
  }, [successEnd, errorEnd]);

  // CLEAR STATE WHEN UNMOUNTED
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  // SPEECH RECOGNITION NAVIGATION
  const speechNavigate = (speech) => {
    if (
      speech.includes("next page") ||
      speech.includes("next") ||
      speech.includes("next question")
    ) {
      if (no == totalQuestions) {
        speechFeedback(`No next page available`);
        navigate(`/students/exams/session/${totalQuestions}`);
      } else {
        speechFeedback(`You are now on question ${+no + 1}`);
        navigate(`/students/exams/session/${+no + 1}`);
      }
    } else if (
      speech.includes("previous") ||
      speech.includes("previous page") ||
      speech.includes("previous question") ||
      speech.includes("back")
    ) {
      if (no == 1) {
        speechFeedback(`No previous page available`);
        navigate(`/students/exams/session/1`);
      } else {
        speechFeedback(`You are now on question ${+no - 1}`);
        navigate(`/students/exams/session/${+no - 1}`);
      }
    }
  };

  // SPEECH RECOGNITION ANSWER
  // const [answersString, setAnswersString] = useState(null);
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    // setAnswersString(
    //   session?.QuestionGroups[no - 1].Question.Answers.map((el) => el.answer)
    // );
    setAnswers(session?.QuestionGroups[no - 1].Question.Answers);
  }, [session, no]);

  // to check the current value of answersString
  // useEffect(() => {
  //   console.log(answersString, "answers string");
  // }, [answersString]);

  const answerHandlerSpeech = (speech) => {
    const cleanSpeech = speech.slice(0, -1);

    const foundAnswer = answers.find(
      (obj) => obj.answer.toLowerCase() === cleanSpeech
    );

    if (!foundAnswer) {
      if (
        speech.includes("next") ||
        speech.includes("previous") ||
        speech.includes("back")
      ) {
        return;
      }
      speechFeedback(`Answer not found`);
    } else {
      speechFeedback(`Answer ${foundAnswer.answer} selected`);
      dispatch(answerHandler(no, foundAnswer.QuestionId, foundAnswer.id));
    }
  };

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-7">
          <div className="card border-0 shadow">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="mb-0">
                    Question <strong className="fw-bold">{no}</strong>
                  </h5>
                </div>
                <div>
                  <div>
                    <CountdownComponent
                      timeStop={session?.timeStop}
                      forceEndExam={forceEndExam}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Question
              question={session?.QuestionGroups[no - 1]}
              answerHandler={answerHandler}
              answers={userAnswers}
            />

            <div className="card-footer">
              <div className="d-flex justify-content-between">
                <div className="text-start">
                  <Link
                    type="button"
                    className="btn btn-primary text-white btn-sm"
                    to={
                      no == 1
                        ? `/students/exams/session/1`
                        : `/students/exams/session/${+no - 1}`
                    }
                  >
                    Previous
                  </Link>
                </div>
                <div className="text-end">
                  <Link
                    type="button"
                    className="btn btn-primary text-white btn-sm"
                    to={
                      no == totalQuestions
                        ? `/students/exams/session/${totalQuestions}`
                        : `/students/exams/session/${+no + 1}`
                    }
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 card border-0 shadow p-2">
            <h6>Text-to-Speech</h6>
            <div style={{ fontSize: "15px" }}>
              Press the speaker icon or key &quot;T&quot; on your keyboard to
              enable Text-to-Speech
            </div>
          </div>
          <div className="mt-2 card border-0 shadow p-2">
            <SpeechRecognition
              speechCommand={speechNavigate}
              answerHandlerSpeech={answerHandlerSpeech}
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="card border-0 shadow">
            <div className="card-header text-center d-flex flex-column align-items-center">
              <div className="badge bg-success p-2 col-md-7 col-8 mb-2">
                {userAnswers?.length} question(s) answered
              </div>
              {userAnswers?.length === totalQuestions ? (
                <div className="badge bg-primary p-2 col-md-7 col-8">
                  All questions answered
                </div>
              ) : null}
            </div>
            <div
              className="card-body"
              style={{ height: "330px", overflowY: "auto" }}
            >
              <div>
                <div width="20%" style={{ width: 20 + "%", float: "left" }}>
                  <div style={{ padding: "5px" }} className="d-flex gap-2">
                    {session?.QuestionGroups.map((el) => (
                      <Link
                        to={`/students/exams/session/${el.questionNumber}`}
                        className={`btn btn-sm w-100 ${
                          answerNumber?.includes(el.questionNumber)
                            ? "btn-primary"
                            : "btn-outline-primary"
                        }`}
                        key={el.id}
                      >
                        {el.questionNumber}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger btn-md border-0 shadow w-100"
                onClick={endExam}
              >
                End Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExamQuestion;
