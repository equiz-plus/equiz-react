import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  actionStartDetail,
  actionStartExam,
} from "../../../actions/actionCreators";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../../../actions/actionTypes";

function ExamComfirmation() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actionStartDetail(id));
  }, []);

  const { examDetail, isLoading, isError, errorMessage } = useSelector(
    (state) => state.startDetail
  );

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    }
  }, [isError]);

  // START EXAM
  const startExam = (id) => {
    dispatch(actionStartExam(id));
  };

  const {
    isSuccess,
    isLoading: loadStart,
    isError: errorStart,
    errorMessage: errorStartMessage,
  } = useSelector((state) => state.startExam);

  useEffect(() => {
    if (isError) {
      toast.error(errorStartMessage);
    } else if (isSuccess) {
      navigate("/students/exams/session/1");
    }
  }, [isSuccess, errorStart]);

  // CLEAR STATE WHEN UNMOUNTED
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  // LOADING GETTING DETAIL
  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <Link
            to="/students"
            className="btn btn-md btn-primary border-0 shadow mb-3"
            type="button"
          >
            <i className="fa fa-long-arrow-alt-left me-2"></i> Back
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5>
                {" "}
                <i className="fa fa-file"></i> {examDetail?.title}
              </h5>
              <hr />
              <div>{examDetail?.description}</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5>
                {" "}
                <i className="fa fa-list-ul"></i> Exam Details
              </h5>
              <hr />
              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0 rounded">
                  <thead>
                    <tr>
                      <td className="fw-bold">Exam</td>
                      <td>{examDetail?.title}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Category</td>
                      <td>{examDetail?.Category.name}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Total Questions</td>
                      <td>{examDetail?.totalQuestions}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Duration</td>
                      <td>{examDetail?.duration}</td>
                    </tr>
                  </thead>
                </table>
              </div>

              {examDetail?.Grades.length === 0 &&
              examDetail?.Sessions.length === 0 &&
              examDetail?.isOpen ? (
                <div>
                  {loadStart ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <button
                      className="btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"
                      onClick={() => startExam(examDetail?.id)}
                    >
                      Start
                    </button>
                  )}
                </div>
              ) : null}

              {examDetail?.Sessions.length !== 0 ? (
                <div>
                  <Link
                    to="/students/exams/session/1"
                    className="btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"
                  >
                    Continue
                  </Link>
                </div>
              ) : null}

              {examDetail?.Grades.length !== 0 ? (
                <div>
                  <button
                    className="btn btn-md btn-primary border-0 shadow w-100 mt-2"
                    disabled
                  >
                    Already finished
                  </button>
                </div>
              ) : null}

              {!examDetail?.isOpen ? (
                <div>
                  <button
                    className="btn btn-md btn-primary border-0 shadow w-100 mt-2"
                    disabled
                  >
                    Exam Closed
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExamComfirmation;
