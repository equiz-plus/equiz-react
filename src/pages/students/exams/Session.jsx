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

function ExamQuestion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    dispatch(actionGetSession());
  }, []);

  const { session } = useSelector((state) => state.getSession);

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

  const [answers, setAnswers] = useState([]);
  const [answerNumber, setAnswerNumber] = useState([]);
  const [timeStop, setTimeStop] = useState(null);

  useEffect(() => {
    setAnswers(session?.Exam.UserAnswers.map((el) => el.AnswerId));
    setAnswerNumber(session?.Exam.UserAnswers.map((el) => el.questionNumber));

    const stop = new Date(session?.timeStop).getTime();
    setTimeStop(stop);
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

  return (
    <>
      <SpeechRecognition />
      <div className="row mb-5">
        <div className="col-md-7">
          <div className="card border-0 shadow">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="mb-0">
                    Soal No. <strong className="fw-bold">2</strong>
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
              answers={answers}
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
                      no == session?.QuestionGroups.length
                        ? `/students/exams/session/${session?.QuestionGroups.length}`
                        : `/students/exams/session/${+no + 1}`
                    }
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card border-0 shadow">
            <div className="card-header text-center">
              <div className="badge bg-success p-2"> 20 dikerjakan</div>
            </div>
            <div
              className="card-body"
              style={{ height: "330px", overflowY: "auto" }}
            >
              <div>
                <div width="20%" style={{ width: 20 + "%", float: "left" }}>
                  <div style={{ padding: "5px" }} className="d-flex gap-2">
                    {session?.QuestionGroups.map((no) => (
                      <Link
                        to={`/students/exams/session/${no.questionNumber}`}
                        className={`btn btn-sm w-100 ${
                          answerNumber?.includes(no.questionNumber)
                            ? "btn-primary"
                            : "btn-outline-primary"
                        }`}
                        key={no.id}
                      >
                        {no.questionNumber}
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

      {/* <!-- modal akhiri ujian --> */}
      {/* <div
        className="showModalEndExam modal fade"
        tabIndex="-1"
        aria-hidden="true"
        style={{ display: "block" }}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Akhiri Ujian ?</h5>
            </div>
            <div className="modal-body">
              Setelah mengakhiri ujian, Anda tidak dapat kembali ke ujian ini
              lagi. Yakin akan mengakhiri ujian?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Ya, Akhiri
              </button>
              <button type="button" className="btn btn-secondary">
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- modal waktu ujian berakhir --> */}
      {/* <div
        className="modal fade showModalEndTimeExam"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
        style={{ display: "block" }}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Waktu Habis !</h5>
            </div>
            <div className="modal-body">
              Waktu ujian sudah berakhir!. Klik{" "}
              <strong className="fw-bold">Ya</strong> untuk mengakhiri ujian.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                {" "}
                Ya
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ExamQuestion;
