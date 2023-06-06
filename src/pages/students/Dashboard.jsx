/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionReadExams } from "../../actions/actionCreators";

function StudentDashboard() {
  const dispatch = useDispatch();

  const { exams, totalPages } = useSelector((state) => state.readExams);
  const { categories } = useSelector((state) => state.readCategories);

  useEffect(() => {
    dispatch(actionReadExams());
    // dispatch(actionReadCategories());
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-success border-0 shadow">
            {/* Welcome <strong>Nama Murid</strong> */}
          </div>
        </div>
      </div>
      <div className="row">
        {exams?.map((exam) => (
          <div className="col-md-6 mb-4" key={exam.id}>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5>{exam.title}</h5>
                <hr />
                <div className="table-responsive">
                  <table className="table table-centered table-nowrap mb-0 rounded">
                    <thead>
                      <tr>
                        <td className="fw-bold">Category</td>
                        <td>{exam.Category.name}</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Organization</td>
                        <td>Hacktiv8</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Duration</td>
                        <td>{exam.duration} minutes</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Status</td>
                        <td>{exam.isOpen ? "Open" : "Closed"}</td>
                      </tr>
                    </thead>
                  </table>
                </div>

                <div>
                  <div>
                    <div>
                      {exam.isOpen ? (
                        <Link
                          to={`/students/exams/${exam.id}/start`}
                          className="btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"
                        >
                          Take Exam
                        </Link>
                      ) : (
                        <button
                          href="/student/exam-confirmation/"
                          disabled
                          className="btn btn-md btn-primary border-0 shadow w-100 mt-2 text-white"
                        >
                          Exam Closed
                        </button>
                      )}
                    </div>

                    {/* <div>
                      <a
                        href="/student/exam/`"
                        className="btn btn-md btn-info border-0 shadow w-100 mt-2"
                      >
                        Continue
                      </a>
                    </div> */}
                  </div>

                  {/* <div>
                    <div>
                      <button
                        className="btn btn-md btn-gray-700 border-0 shadow w-100 mt-2"
                        disabled
                      >
                        Exam has not been started
                      </button>
                    </div>

                    <div>
                      <button
                        className="btn btn-md btn-danger border-0 shadow w-100 mt-2"
                        disabled
                      >
                        Missed the exam
                      </button>
                    </div>
                  </div> */}
                </div>

                {/* <div>
                  <button
                    className="btn btn-md btn-danger border-0 shadow w-100 mt-2"
                    disabled
                  >
                    Already took this exam
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="row">
        <div className="col-md-12">
          <div className="alert alert-danger border-0 shadow">
            <i className="fa fa-info-circle"></i> There is no available exam yet
          </div>
        </div>
      </div> */}
    </>
  );
}

export default StudentDashboard;
