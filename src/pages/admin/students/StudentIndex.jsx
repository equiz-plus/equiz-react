import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionReadStudents } from "../../../actions/actionCreators";

function StudentIndex() {
  const dispatch = useDispatch();

  // const { studentsList, setStudentsList } = useState([]);

  useEffect(() => {
    dispatch(actionReadStudents());
  }, []);

  const { students, isSuccess, isError, errorMessage, isLoading } = useSelector(
    (state) => state.readStudents
  );

  // useEffect(() => {
  //   if (isSuccess) {
  //     setStudentsList(students);
  //   } else if (isError) {
  //     alert(errorMessage);
  //   }
  // }, [isSuccess, isError]);

  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-5 col-12 mb-2">
                <div className="row">
                  <div className="col-md-6 col-12 mb-2">
                    <a
                      href="/admin/students/create"
                      className="btn btn-md btn-primary border-0 shadow w-100"
                      type="button"
                    >
                      <i className="fa fa-plus-circle me-2"></i>
                      Add
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-12 mb-2">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-0 shadow fs-6"
                      placeholder="Insert student's name..."
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
                        <th className="border-0">Email</th>
                        <th className="border-0">Premium Member</th>
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
                      {students?.map((student, index) => (
                        <tr key={student.id}>
                          <td className="fw-bold text-center">{index + 1}</td>
                          <td>{student.name}</td>
                          <td className="text-center">{student.email}</td>
                          <td className="text-center">
                            {student.isPremium ? "Premium" : "Regular"}
                          </td>
                          <td className="text-center">
                            <a
                              href="/admin/students/${student.id}/edit"
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

export default StudentIndex;
