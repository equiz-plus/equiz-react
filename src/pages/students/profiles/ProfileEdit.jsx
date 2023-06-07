import {
  Outlet,
  useNavigate,
  useParams,
  Link,
  useOutletContext,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionEditUserDetail,
  actionReadUserDetail,
} from "../../../actions/actionCreators";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../../../actions/actionTypes";
function ProfileEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userDetails } = useSelector((state) => state.readUserDetail);

  useEffect(() => {
    dispatch(actionReadUserDetail());
  }, []);

  const [userData, setUserData] = useState({
    username: null,
    email: null,
    phone: null,
    name: null,
    gender: null,
    avatar: null,
    isPremium: null,
    premiumExpiry: null,
    password: null,
    oldPassword: null,
  });

  useEffect(() => {
    setUserData(userDetails);
  }, [userDetails]);

  //EDIT
  const formHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(actionEditUserDetail(userData));
  };

  const { isSuccess, isError, isLoading, errorMessage } = useSelector(
    (state) => state.editUserDetail
  );

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    } else if (isSuccess) {
      localStorage.setItem("name", userData.name);
      toast.success(`Profile updated`);
      navigate("/students");
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
      <div className="row">
        <div className="col-12 col-xl-8">
          <div className="card card-body border-0 shadow mb-4">
            <h2 className="h5 mb-4">General information</h2>
            <form method="post" onSubmit={submitForm}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div>
                    <label>Email</label>
                    <input
                      className="form-control"
                      id="email"
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      defaultValue={userData?.email}
                      onChange={formHandler}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div>
                    <label>Username</label>
                    <input
                      className="form-control"
                      id="username"
                      type="text"
                      placeholder="Your username"
                      name="username"
                      defaultValue={userData?.username}
                      onChange={formHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div>
                    <label>Old Password</label>
                    <input
                      className="form-control"
                      id="old-password"
                      type="password"
                      placeholder="Enter your old password"
                      name="oldPassword"
                      onChange={formHandler}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div>
                    <label>New Password</label>
                    <input
                      className="form-control"
                      id="new-password"
                      type="password"
                      placeholder="Enter your new password"
                      name="password"
                      onChange={formHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 mb-3">
                  <label>Full Name</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      defaultValue={userData?.name}
                      name="name"
                      onChange={formHandler}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label value="">Gender</label>
                  <select
                    className="form-select mb-0"
                    id="gender"
                    aria-label="Gender select example"
                    defaultValue={userData?.gender ? userData.gender : ""}
                    onChange={formHandler}
                    name="gender"
                  >
                    <option disabled value="">
                      {userData?.gender
                        ? `--${userData.gender}--`
                        : "--Select one--"}
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      className="form-control"
                      id="phone"
                      type="text"
                      placeholder="Your phone number"
                      defaultValue={userData?.phone}
                      onChange={formHandler}
                      name="phone"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label>Avatar</label>
                    <input
                      className="form-control"
                      id="avatar"
                      type="text"
                      placeholder="Enter an image URL"
                      onChange={formHandler}
                      name="avatar"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <button
                  className="btn btn-gray-800 mt-2 animate-up-2"
                  type="submit"
                >
                  Save all
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-xl-4">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="card shadow border-0 text-center p-0">
                <div
                  className="profile-cover rounded-top"
                  data-background="https://d1hjkbq40fs2x4.cloudfront.net/2017-12-12/files/eos-6d-mark-ii-sample-image_1723-1.jpg"
                ></div>
                <div className="card-body pb-5">
                  <img
                    src={userData?.avatar}
                    className="avatar-xl rounded-circle mx-auto mt-n7 mb-4"
                    alt=""
                  />
                  <h4 className="h3">{userData?.name}</h4>
                  <h5 className="fw-normal mb-3">Student</h5>
                  {/* <a className="btn btn-sm btn-secondary" href="#">
                    Change Avatar
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileEdit;
