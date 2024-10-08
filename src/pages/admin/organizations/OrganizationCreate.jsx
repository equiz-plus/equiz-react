import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  actionCreateOrganization,
  actionReadOrgById,
} from "../../../actions/actionCreators";
import { CLEAR_STATE } from "../../../actions/actionTypes";
import { toast } from "react-toastify";
const OrganizationCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(actionReadOrgById(id));
  }, []);

  const { organizationDetail } = useSelector((state) => state.readOrgById);

  const [organization, setOrganization] = useState({
    name: "",
    address: "",
    logo: "",
    pic: "",
    sign: "",
    prefix: "",
  });

  useEffect(() => {
    setOrganization(organizationDetail);
  }, [organizationDetail]);

  const getData = (e) => {
    e.preventDefault();
    setOrganization({
      ...organization,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(actionCreateOrganization(organization));
  };

  const { isSuccess, isError, isLoading, title, errorMessage } = useSelector(
    (state) => state.createOrganizations
  );

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch({ type: CLEAR_STATE });
    } else if (isSuccess) {
      toast.success(`${name} successfully created`);
      navigate("/admin/organizations");
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

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
                          placeholder="Insert org's name"
                          name="name"
                          onChange={getData}
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
                          onChange={getData}
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
                          onChange={getData}
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
                          onChange={getData}
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
                          onChange={getData}
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
                          onChange={getData}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-md btn-primary border-0 shadow me-2"
                    onClick={submitHandler}
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
