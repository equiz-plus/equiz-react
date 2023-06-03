import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerMiddleware } from "../../actions/actionCreators";

function RegisterPage() {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
    dispatch(registerMiddleware(userData));
  };

  const { registered } = useSelector((state) => state.register);

  useEffect(() => {
    if (registered.email === userData.email) {
      navigate("/auth/confirm");
    }
  }, [registered]);

  // === HTML ===
  return (
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
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      onChange={formHandler}
                    />
                  </div>
                  <div className="alert alert-danger mt-2">Name Required</div>
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
                  <div className="alert alert-danger mt-2">Email Required</div>
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
                    <div className="alert alert-danger mt-2">
                      Password Required
                    </div>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-gray-800">
                    Register
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
  );
}

export default RegisterPage;
