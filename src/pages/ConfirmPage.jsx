import { useState } from "react";
import { confirmMiddleware } from "../actions/actionCreators";
import { useDispatch } from "react-redux";

function ConfirmPage() {
  let [confirmData, setConfirmData] = useState({
    token: "",
    email: "",
  });

  const formHandler = (e) => {
    setConfirmData({
      ...confirmData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    setConfirmData({
      ...confirmData,
      email: localStorage.getItem("email"),
    });

    dispatch(confirmMiddleware(confirmData));
  };

  return (
    <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center form-bg-image">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <title>Login Administrator - Aplikasi Ujian Online</title>
            <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h3>Confirm your account</h3>
              </div>

              <form className="mt-4" onSubmit={submitHandler}>
                <div className="form-group mb-4">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="OTP"
                      name="token"
                      onChange={formHandler}
                    />
                  </div>
                  <div className="alert alert-danger mt-2">Token Required</div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-gray-800">
                    Confirm Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfirmPage;
