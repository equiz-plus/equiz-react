import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  actionDeleteOrganization,
  actionReadOrganizations,
} from "../../../actions/actionCreators";
import { readOrganizationMiddleware } from "../../../actions/creators/readOrganizationsCreator";

const OrganizationIndex = () => {
  const { organizations, errorMsg: error } = useSelector(
    (state) => state.readOrganizations
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(readOrganizationMiddleware());
    })();
  }, []);

  // DELETE
  const deleteHandler = (id) => {
    dispatch(actionDeleteOrganization(id));
  };

  const {
    isSuccess: successDelete,
    isError: errorDelete,
    errorMessage: errorDeleteMessage,
  } = useSelector((state) => state.deleteOrganizations);

  useEffect(() => {
    if (successDelete) {
      dispatch(actionReadOrganizations());
      toast.success("Organization successfully deleted");
    } else if (errorDelete) {
      toast.error(errorDeleteMessage);
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
                        to={"/admin/organizations/create"}
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
                        className="form-control border-0 shadow"
                        placeholder="Search company by name..."
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
                          <th className="border-0 rounded-start">No.</th>
                          <th className="border-0">Name</th>
                          <th className="border-0">Address</th>
                          <th className="border-0">Logo</th>
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
                        {organizations?.map((org, index) => (
                          <tr>
                            <td className="fw-bold text-center">{index + 1}</td>
                            <td>{org.name}</td>
                            <td className="text-center">{org.address}</td>
                            <td>
                              <img src={org.logo} alt="images" width={"50px"} />
                            </td>

                            <td className="text-center">
                              <Link
                                to={`/admin/organizations/edit/${org.id}`}
                                className="btn btn-sm btn-info border-0 shadow me-2"
                                type="button"
                              >
                                <i className="fa fa-pencil-alt"></i>
                              </Link>
                              <button
                                className="btn btn-sm btn-danger border-0"
                                onClick={() => deleteHandler(org.id)}
                              >
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
    </>
  );
};

export default OrganizationIndex;
