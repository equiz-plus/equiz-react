/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  actionReadCategories,
  actionReadExams,
} from "../../actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../../components/Pagination";


function StudentDashboard() {
  const dispatch = useDispatch();

  const { exams, totalPages } = useSelector((state) => state.readExams);
  const { categories } = useSelector((state) => state.readCategories);

  useEffect(() => {
    dispatch(actionReadExams());
    dispatch(actionReadCategories());
  }, []);

  // === FILTERS ===
  const [filters, setFilters] = useState({
    search: "",
    page: null,
    category: null,
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // page
  const page = searchParams.get("page");

  // search
  const searchHandler = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // category
  const categoryHandler = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // dispatch filters
  useEffect(() => {
    dispatch(actionReadExams(page, filters.search, filters.category));
  }, [page, filters]);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-success border-0 shadow">
            Welcome, <strong>{localStorage.getItem("name")}</strong>
          </div>
        </div>
      </div>
      <div className="row d-flex flex-row justify-content-between mb-2">
        <div className="d-flex col-md-8">
          <div className="col-md-10 col-12 mb-2">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 shadow fs-6"
                  placeholder="search..."
                  name="search"
                  onChange={searchHandler}
                />
                <span className="input-group-text border-0 shadow">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-3 col-12 mb-2 d-flex">
          <select
            className="form-select"
            name="category"
            onChange={categoryHandler}
          >
            <option value={null}>All</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
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
                        <td style={{ fontWeight: "bold" }}>
                          {exam.Category.name}
                        </td>
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
      <div className="mb-5 d-flex justify-content-center">
        <Pagination clas totalPages={totalPages} />
      </div>

      {!exams && (
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-danger border-0 shadow">
              <i className="fa fa-info-circle"></i> There is no available exam
              yet
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default StudentDashboard;
