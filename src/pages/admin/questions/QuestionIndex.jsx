import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import {
  actionClearDeleteQuestions,
  actionDeleteQuestions,
  actionReadCategories,
  actionReadQuestions,
} from "../../../actions/actionCreators";
import Pagination from "../../../components/Pagination";

const QuestionIndex = () => {
  const dispatch = useDispatch();
  const { questions, totalPages } = useSelector((state) => state.readQuestions);
  const { categories } = useSelector((state) => state.readCategories);

  useEffect(() => {
    dispatch(actionReadQuestions());
    dispatch(actionReadCategories());
  }, []);

  // FILTER
  const [filters, setFilters] = useState({
    search: "",
    page: null,
    category: null,
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  //PAGE
  const page = searchParams.get("page");

  // SEARCH
  const searchHandler = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // CATEGORY
  const categoryHandler = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // DISPATCH FILTERS
  useEffect(() => {
    dispatch(actionReadQuestions(page, filters.search, filters.category));
  }, [page, filters]);

  //DELETE
  const deleteHandler = (id) => {
    dispatch(actionDeleteQuestions(id));
    dispatch(actionReadQuestions());
  };

  const {
    isSuccess: successDelete,
    isError: errorDelete,
    errorMsg: errorDeleteMessage,
  } = useSelector((state) => state.deleteExam);

  useEffect(() => {
    if (successDelete) {
      dispatch(actionReadQuestions());
      toast.success("Question Deleted");
      dispatch(actionClearDeleteQuestions());
    } else if (errorDelete) {
      toast.error(errorDeleteMessage);
      dispatch(actionClearDeleteQuestions());
    }
  }, [successDelete, errorDelete]);

  return (
    <>
      <>
        <div className="container-fluid mb-5 mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-5 col-12 mb-2">
                  <div className="row">
                    <div className="col-md-6 col-12 mb-2">
                      <Link
                        to={"/admin/questions/create"}
                        className="btn btn-md btn-primary border-0 shadow w-100"
                      >
                        <i className="fa fa-plus-circle me-2"></i>
                        Add
                      </Link>
                    </div>
                    <div className="col-md-6 col-12 mb-2 d-flex">
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
                <div className="col-md-7 col-12 mb-2">
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-0 shadow fs-6"
                        placeholder="Search questions by title..."
                        onChange={searchHandler}
                        name="search"
                      />
                      <span className="input-group-text border-0 shadow">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                  </form>
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
                            style={{ width: 2 + "%" }}
                          >
                            No.
                          </th>
                          <th className="border-0">Questions</th>
                          <th className="border-0">Category</th>
                          <th
                            className="border-0 rounded-end"
                            style={{ width: 15 + "%" }}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <div className="mt-2"></div>
                      <tbody>
                        {questions?.map((quest, index) => (
                          <tr>
                            <td className="fw-bold text-center">{index + 1}</td>
                            <td>{quest.question}</td>
                            <td className="text-center">
                              {quest.Category?.name}
                            </td>
                            <td className="text-center">
                              <button
                                className="btn btn-sm btn-danger border-0"
                                onClick={() => deleteHandler(quest.id)}
                              >
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
    </>
  );
};

export default QuestionIndex;
