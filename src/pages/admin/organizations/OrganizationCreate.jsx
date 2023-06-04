const OrganizationCreate = () => {
  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <a
              href="/admin/organizations"
              className="btn btn-md btn-primary border-0 shadow mb-3"
              type="button"
            >
              <i className="fa fa-long-arrow-alt-left me-2"></i> Back
            </a>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5>
                  <i className="fa fa-user"></i> Add Organization
                </h5>
                <hr />
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="insert org's name"
                        />
                        <div className="alert alert-danger mt-2">Monke</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Insert org's location"
                        />
                        <div className="alert alert-danger mt-2">
                          Gulu, Uganda
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Logo</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Insert org's logo"
                        />
                        <div className="alert alert-danger mt-2">img url</div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Pic</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Insert org's pic"
                        />
                        <div className="alert alert-danger mt-2">pic???</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Sign</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Insert org's sign"
                        />
                        <div className="alert alert-danger mt-2">sign???</div>
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
};

export default OrganizationCreate;
