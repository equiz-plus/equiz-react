import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { actionRegister } from "../../actions/actionCreators";
import { CLEAR_STATE } from "../../actions/actionTypes";
import { ToastContainer, toast } from "react-toastify";

function RegisterPage() {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { errorMessage, isLoading, isError, isSuccess } = useSelector(
    (state) => state.register
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(actionRegister(userData));
  };

  const notify = (msg) => toast.error(msg);

  useEffect(() => {
    if (isError) {
      notify(errorMessage);
      dispatch({ type: CLEAR_STATE });
    } else if (isSuccess) {
      toast.success("Register successful, please check your email");
      navigate("/auth/confirm");
    }
  }, [isError, isSuccess]);

  // CLEAR STATE WHEN UNMOUNTED
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  // === HTML ===
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
                  <h3>Sign Up</h3>
                </div>

                <form className="mt-4" onSubmit={submitHandler}>
                  <div className="form-group mb-4">
                    <label>Name</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        onChange={formHandler}
                      />
                    </div>
                  </div>

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
                        onChange={formHandler}
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
                          onChange={formHandler}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-gray-800">
                      {!isLoading ? (
                        "REGISTER"
                      ) : (
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      )}
                    </button>
                  </div>

                  <div className="d-grid mt-3 text-center">
                    <span>
                      Already have an account?{" "}
                      <Link to="/auth/login" style={{ fontWeight: "bold" }}>
                        Login here
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

export default RegisterPage;
