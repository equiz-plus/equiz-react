import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CLEAR_STATE } from "../../actions/actionTypes";
import { actionConfirm } from "../../actions/actionCreators";
import { toast } from "react-toastify";

function ConfirmPage() {
  let [confirmData, setConfirmData] = useState({
    token: "",
    email: "",
  });

  const { isError, isSuccess, isLoading, errorMessage } = useSelector(
    (state) => state.confirm
  );

  const formHandler = (e) => {
    setConfirmData({
      ...confirmData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(actionConfirm(confirmData));
  };

  const notify = (msg) => toast.error(msg);

  useEffect(() => {
    if (isError) {
      notify(errorMessage);
      dispatch({ type: CLEAR_STATE });
    } else if (isSuccess) {
      toast.success("Email confirmed, please continue to log in");
      navigate("/auth/login");
    }
  }, [isError, isSuccess]);

  // CLEAR STATE
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

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
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={formHandler}
                    />
                  </div>
                </div>

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
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-gray-800">
                    {!isLoading ? (
                      "Confirm Account"
                    ) : (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
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
