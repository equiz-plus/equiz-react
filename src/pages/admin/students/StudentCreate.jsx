function StudentCreate() {
  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <a
              href="/admin/students"
              className="btn btn-md btn-primary border-0 shadow mb-3"
              type="button"
            >
              <i className="fa fa-long-arrow-alt-left me-2"></i> Back
            </a>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5>
                  <i className="fa fa-user"></i> Add Students
                </h5>
                <hr />
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>NISN</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="insert student's NISN"
                        />
                        <div className="alert alert-danger mt-2">12131</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Insert student's name"
                        />
                        <div className="alert alert-danger mt-2">Mike</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Class</label>
                        <select className="form-select">
                          <option>Class</option>
                        </select>
                        <div className="alert alert-danger mt-2">12131</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Gender</label>
                        <select className="form-select">
                          <option value="L">Male</option>
                          <option value="P">Female</option>
                        </select>
                        <div className="alert alert-danger mt-2">Male</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Insert password"
                        />
                        <div className="alert alert-danger mt-2">
                          Password Error Message
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Password confirmation</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Insert password confirmation"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-md btn-primary border-0 shadow me-2"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-md btn-warning border-0 shadow"
                  >
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentCreate;
