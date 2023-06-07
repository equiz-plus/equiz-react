import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionUserReadGrades } from "../../../actions/actionCreators";
function StudentGradesIndex() {
  const dispatch = useDispatch();

  const { grades } = useSelector((state) => state.readGrades);

  useEffect(() => {
    dispatch(actionUserReadGrades());
  }, []);
  return (
    <>
      <div className="container-fluid mb-5 mt-5">
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
                        <th className="border-0">Category ID</th>
                        <th className="border-0">Grades</th>
                        <th
                          className="border-0 rounded-end"
                          style={{ width: 15 + "%" }}
                        >
                          Info
                        </th>
                      </tr>
                    </thead>
                    <div className="mt-2"></div>
                    <tbody>
                      {grades?.map((grade, index) => (
                        <tr key={grade.id}>
                          <td className="fw-bold text-center">{index + 1}</td>
                          <td>{grade?.Exam?.title}</td>
                          <td>{grade?.Exam?.CategoryId}</td>
                          <td>{grade?.grade}</td>
                          <td className="text-center">
                            {grade.Certificates[0]?.slug !== undefined ? (
                              <Link
                                to={`/certificates/${grade?.Certificates[0]?.slug}`}
                                className="btn btn-sm btn-info border-0 shadow me-2"
                                type="button"
                              >
                                Details
                              </Link>
                            ) : (
                              ""
                            )}

                            {/* <button
                              className="btn btn-gray-800 mt-2 animate-up-2"
                              type="submit"
                              onClick={() => {
                                window.open(
                                  `/certificates/${grade?.Certificates[0]?.slug}`,
                                  "_blank"
                                );
                              }}
                            >
                              Save all
                            </button> */}
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

export default StudentGradesIndex;
