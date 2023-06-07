/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ScheduleForm({
  exams,
  submitHandler,
  inputHandler,
  scheduleDetail,
}) {
  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <Link
              to="/admin/exams/schedule"
              className="btn btn-md btn-primary border-0 shadow mb-3"
              type="button"
            >
              <i className="fa fa-long-arrow-alt-left me-2"></i> Cancel
            </Link>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5>
                  <svg
                    className="icon icon-md-3 me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                    ></path>
                  </svg>
                  Create Exam Schedule
                </h5>
                <hr />
                <form method="post" onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Exam</label>
                        <select
                          className="form-select"
                          name="ExamId"
                          onChange={inputHandler}
                        >
                          {exams ? (
                            <>
                              <option selected disabled>
                                --Exam--
                              </option>
                              {exams.map((exam) => (
                                <option value={exam.id} key={exam.id}>
                                  {exam.title}
                                </option>
                              ))}
                            </>
                          ) : (
                            <option value={scheduleDetail?.id} selected>
                              {scheduleDetail?.Exam.title}
                            </option>
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label>Start Date</label>
                      <input
                        type="date"
                        min="1"
                        className="form-control"
                        placeholder="Start Date"
                        name="startingDate"
                        onChange={inputHandler}
                        defaultValue={scheduleDetail?.startingDate.slice(0, 10)}
                      />
                    </div>
                    <div className="col-md-3">
                      <label>End Date</label>
                      <input
                        type="date"
                        min="1"
                        className="form-control"
                        placeholder="End Date"
                        name="endDate"
                        onChange={inputHandler}
                        defaultValue={scheduleDetail?.endDate.slice(0, 10)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-md btn-primary border-0 shadow me-2"
                  >
                    {/* {!isLoading ? (
                      "SUBMIT"
                    ) : (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )} */}
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-md btn-warning border-0 shadow"
                  >
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
