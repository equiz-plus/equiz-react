import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Pagination from "../../../components/Pagination";
import { actionReadCertificates } from "../../../actions/actionCreators";
const GradeIndex = () => {
  const dispatch = useDispatch();
  const { certificates, totalPages } = useSelector(
    (state) => state.readCertificates
  );

  useEffect(() => {
    dispatch(actionReadCertificates());
  }, []);

  // === FILTERS ===
  const [filters, setFilters] = useState({
    page: null,
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

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
                        className="form-control border-0 shadow fs-6"
                        placeholder="Search grade by student name..."
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
                          <th className="border-0">Student Name</th>
                          <th className="border-0">Exam Title</th>
                          <th className="border-0">Certificate Number</th>
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
                        {certificates?.certificates?.map((cert, index) => (
                          <tr>
                            <td className="fw-bold text-center">{index + 1}</td>
                            <td>{cert?.User?.name}</td>
                            <td className="text-center">{cert?.Exam?.title}</td>
                            <td className="text-center">
                              {cert.certificateNo}
                            </td>
                            <td className="text-center">
                              <Link
                                to={`/certificates/${cert.slug}`}
                                className="btn btn-sm btn-info border-0 shadow me-2"
                                type="button"
                              >
                                <i className="fa fa-info-circle"></i>
                              </Link>
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

export default GradeIndex;
