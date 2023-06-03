function LoginPage() {
  return (
    <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center form-bg-image">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <title>Login Administrator - Aplikasi Ujian Online</title>
            <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h3>ADMINISTRATOR</h3>
              </div>
              <form className="mt-4">
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
                      />
                    </div>
                    <div className="alert alert-danger mt-2">
                      Password Required
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
                    LOGIN
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

export default LoginPage;
