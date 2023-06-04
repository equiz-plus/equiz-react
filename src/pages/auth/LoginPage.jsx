import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CLEAR_STATE } from "../../actions/actionTypes";
// import { loginMiddleware } from "../../actions/actionCreators";
import { ToastContainer, toast } from "react-toastify";
import { actionLogin } from "../../actions/actionCreators";

function LoginPage() {
  // LOGIN
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(actionLogin(userData));
  };

  const { errorMessage, isLoading, isError, isSuccess, access_token, role } =
    useSelector((state) => state.login);

  const notify = (msg) => toast.error(msg);

  useEffect(() => {
    if (isError) {
      notify(errorMessage);
      dispatch({ type: CLEAR_STATE });
    } else if (isSuccess && access_token) {
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("role", role);

      if (role === "admin") navigate("/admin");
      else if (role === "user") navigate("/students");
    }
  }, [isError, isSuccess]);

  // CLEAR STATE WHEN UNMOUNTED
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center form-bg-image">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <title>Login Administrator - Aplikasi Ujian Online</title>
              <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3>Login</h3>
                </div>
                <form className="mt-4" onSubmit={submitLogin}>
                  <div className="form-group mb-4">
                    <label>Email Address</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        onChange={loginHandler}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-group mb-4">
                      <label>Password</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon2">
                          <i className="fa fa-lock"></i>
                        </span>
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          name="password"
                          onChange={loginHandler}
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-top mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="remember"
                        />
                        <label className="form-check-label mb-0">
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-gray-800">
                      {!isLoading ? (
                        "LOGIN"
                      ) : (
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="d-grid mt-3 text-center">
                    <span>
                      Don&apos;t have an account?{" "}
                      <Link to="/auth/register" style={{ fontWeight: "bold" }}>
                        Register here
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
