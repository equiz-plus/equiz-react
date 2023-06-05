import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionAnswerExam,
  actionClearAnswerExam,
  actionGetSession,
} from "../../../actions/actionCreators";
import Question from "../../../components/Question";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function ExamQuestion() {
  const dispatch = useDispatch();

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

  useEffect(() => {
    setAnswers(session?.Exam.UserAnswers.map((el) => el.AnswerId));
  }, [session]);

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-7">
          <div className="card border-0 shadow">
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
                    className="btn btn-gray-400 btn-sm btn-block mb-2"
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
                    className="btn btn-gray-400 btn-sm"
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
                  <div style={{ padding: "5px" }}>
                    <button className="btn btn-gray-400 btn-sm w-100">
                      Next
                    </button>

                    <button className="btn btn-outline-info btn-sm w-100">
                      Next
                    </button>

                    <button className="btn btn-info btn-sm w-100">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger btn-md border-0 shadow w-100">
                Akhiri Ujian
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
