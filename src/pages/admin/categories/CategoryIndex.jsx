import { Link } from "react-router-dom";

function CategoryIndex() {
  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-">
            <div className="row">
              <div className="col-md-3 col-12 mb-2">
                <Link
                  to="/admin/categories/create"
                  className="btn btn-md btn-primary border-0 shadow w-100"
                  type="button"
                >
                  <i className="fa fa-plus-circle me-2"></i>
                  Add
                </Link>
              </div>
              <div className="col-md-3 col-12 mb-2"></div>
              <div className="col-md-6 col-12 mb-2">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-0 shadow"
                      placeholder="search..."
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
                          style={{ width: 5 + "%" }}
                        >
                          No.
                        </th>
                        <th className="border-0">Category Name</th>
                        <th
                          className="border-0 rounded-end"
                          style={{ width: 15 + "%" }}
                        >
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <div className="mt-2"></div>
                    <tbody>
                      <tr>
                        <td className="fw-bold text-center">1</td>
                        <td>Catgeory Name</td>
                        <td className="text-center">
                          <a
                            href="`/admin/lessons/${lesson.id}/edit`"
                            className="btn btn-sm btn-info border-0 shadow me-2"
                            type="button"
                          >
                            <i className="fa fa-pencil-alt"></i>
                          </a>
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
  );
}
export default CategoryIndex;
