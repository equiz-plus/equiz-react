import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionReadSchedules } from "../../../actions/actionCreators";

function ExamSchedule() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionReadSchedules());
  }, []);

  const { schedules } = useSelector((state) => state.readSchedules);

  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row d-flex flex-row justify-content-between">
              <div className="d-flex col-md-8">
                <div className="col-md-3 col-12 mb-2">
                  <Link
                    to="/admin/exams/create-schedule"
                    className="btn btn-md btn-primary border-0 shadow w-100"
                    type="button"
                  >
                    <i className="fa fa-plus-circle me-2"></i>
                    Add Schedule
                  </Link>
                </div>

                <div className="col-md-8 col-12 mb-2 mx-2">
                  {/* <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-0 shadow fs-6"
                        placeholder="Search schedule by exam title..."
                        name="search"
                      />
                      <span className="input-group-text border-0 shadow">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                  </form> */}
                </div>
              </div>

              <div className="col-md-2 col-12 mb-2 d-flex">
                {/* <select className="form-select" name="category">
                  <option value="">All</option>
                  <option value="">nama kategory</option>
                </select> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-12">
            <div className="card border-0 shadow">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-centered table-nowrap mb-0 rounded">
                    <thead className="thead-dark">
                      <tr className="border-0">
                        <th
                          className="border-0 rounded-start"
                          style={{ width: 5 + "%" }}
                        >
                          No.
                        </th>
                        <th className="border-0">Exam</th>
                        <th className="border-0">Start Date</th>
                        <th className="border-0">End Date</th>
                        <th
                          className="border-0 rounded-end"
                          style={{ width: 5 + "%" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>

                    <div className="mt-2"></div>

                    <tbody>
                      {schedules?.map((schedule, index) => (
                        <tr key={index}>
                          <td className="fw-bold text-center">{index + 1}</td>
                          <td>{schedule.Exam.title}</td>
                          <td>{schedule.startingDate.slice(0, 10)}</td>
                          <td>{schedule.endDate.slice(0, 10)}</td>
                          <td className="text-center">
                            <Link
                              to={`/admin/exams/edit-schedule/${schedule.id}`}
                              className="btn btn-sm btn-info border-0 shadow me-2"
                              type="button"
                            >
                              <i className="fa fa-pencil-alt"></i>
                            </Link>
                            <button className="btn btn-sm btn-danger border-0">
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExamSchedule;
