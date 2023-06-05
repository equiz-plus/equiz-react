import { Link, useParams } from "react-router-dom";

export default function OrganizationForm({
  formHandler,
  submitForm,
  isLoading,
  organizationData,
}) {
  const { id } = useParams();
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
                  <i className="fa fa-user"></i>{" "}
                  {id ? "Edit Organization" : "Create Organization"}
                </h5>
                <hr />
                <form method="post" onSubmit={submitForm}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Insert org's name"
                          name="name"
                          onChange={formHandler}
                          defaultValue={organizationData?.name}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Insert org's location"
                          name="address"
                          onChange={formHandler}
                          defaultValue={organizationData?.address}
                        />
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
                          name="logo"
                          onChange={formHandler}
                          defaultValue={organizationData?.logo}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Person in Charge</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Insert org's pic"
                          name="pic"
                          onChange={formHandler}
                          defaultValue={organizationData?.pic}
                        />
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
                          name="sign"
                          onChange={formHandler}
                          defaultValue={organizationData?.sign}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Prefix</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="4 character required"
                          name="prefix"
                          onChange={formHandler}
                          defaultValue={organizationData?.prefix}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-md btn-primary border-0 shadow me-2"
                  >
                    {!isLoading ? (
                      "SUBMIT"
                    ) : (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
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
