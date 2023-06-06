import { Link } from "react-router-dom";

const QuestionIndex = () => {
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
                  </div>
                </div>
                <div className="col-md-7 col-12 mb-2">
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-0 shadow fs-5"
                        placeholder="Search questions by title..."
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
                        <tr>
                          <td className="fw-bold text-center">1</td>
                          <td>Questions</td>
                          <td className="text-center">Category Name</td>
                          <td className="text-center">
                            <Link
                              to={`/admin/questions/edit/`}
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
                      </tbody>
                    </table>
                  </div>
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
