import { Outlet, useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionReadUserDetail } from "../actions/actionCreators";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../actions/actionTypes";

function StudentLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userDetails } = useSelector((state) => state.readUserDetail);

  useEffect(() => {
    dispatch(actionReadUserDetail());
  }, []);

  const [userData, setUserData] = useState({
    id: null,
    username: null,
    email: null,
    phone: null,
    name: null,
    gender: null,
    avatar: null,
    isPremium: null,
    premiumExpiry: null,
  });

  useEffect(() => {
    setUserData({
      ...userData,
      avatar: localStorage.getItem("avatar"),
      name: localStorage.getItem("name"),
    });
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary mb-4 shadow">
        <div className="container position-relative">
          <Link className="navbar-brand me-lg-3" to={"/students"}>
            <img
              className="navbar-brand-dark"
              src="../../public/assets/images/logo-white.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>

          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarCollapse"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item dropdown ms-lg-3">
                <a
                  className="nav-link dropdown-toggle pt-1 px-0"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="media d-flex align-items-center">
                    <img
                      className="avatar rounded-circle"
                      alt="Image placeholder"
                      src={userData?.avatar}
                    />
                    <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                      <span className="mb-0 font-small fw-bold text-white">
                        {userData?.name}
                      </span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1 border-0 shadow">
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to={"/students/profile"}
                  >
                    <svg
                      className="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    My Profile
                  </Link>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="student/profile/settings"
                  >
                    <svg
                      className="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Settings
                  </a>
                  <div role="separator" className="dropdown-divider my-1"></div>
                  <a
                    className="dropdown-item d-flex align-items-center button"
                    onClick={logout}
                  >
                    <svg
                      className="dropdown-icon text-danger me-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Outlet userData={[userData]} />
      </div>
    </>
  );
}

export default StudentLayout;
