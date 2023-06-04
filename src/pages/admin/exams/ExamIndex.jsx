import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionReadCategories,
  actionReadExams,
} from "../../../actions/actionCreators";
import Pagination from "../../../components/Pagination";

function ExamIndex() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { exams, totalPages } = useSelector((state) => state.readExams);
  const { categories } = useSelector((state) => state.readCategories);

  useEffect(() => {
    dispatch(actionReadExams());
    dispatch(actionReadCategories());
  }, []);

  // FILTERS
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
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row d-flex flex-row justify-content-between">
              <div className="d-flex col-md-8">
                <div className="col-md-3 col-12 mb-2">
                  <Link
                    to="/admin/exams/create"
                    className="btn btn-md btn-primary border-0 shadow w-100"
                    type="button"
                  >
                    <i className="fa fa-plus-circle me-2"></i>
                    Create Exam
                  </Link>
                </div>

                <div className="col-md-8 col-12 mb-2 mx-2">
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-0 shadow"
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

              <div className="col-md-2 col-12 mb-2 d-flex">
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
                        <th className="border-0">Organization</th>
                        <th className="border-0">Category</th>
                        <th className="border-0">Time (minutes)</th>
                        <th className="border-0">Total Questions</th>
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
                      {exams?.map((exam, index) => (
                        <tr key={exam.id}>
                          <td className="fw-bold text-center">{index + 1}</td>
                          <td>{exam.title}</td>
                          <td>Hacktiv8</td>
                          <td>{exam.Category.name}</td>
                          <td className="text-center">{exam.duration}</td>
                          <td className="text-center">{exam.totalQuestions}</td>
                          <td className="text-center">
                            <a
                              href="`/admin/exams/${exam.id}`"
                              className="btn btn-sm btn-primary border-0 shadow me-2"
                              type="button"
                            >
                              <i className="fa fa-plus-circle"></i>
                            </a>
                            <Link
                              to={`/admin/exams/edit/${exam.id}`}
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

                <Pagination totalPages={totalPages} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExamIndex;
