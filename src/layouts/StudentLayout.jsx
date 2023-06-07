import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { actionReadUserDetail } from "../actions/actionCreators";
import { scrollDownAction } from "../actions/creators/scrollDownCreator";

function StudentLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

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
  }, [location]);

  useEffect(() => {
    setUserData({
      ...userData,
      avatar: localStorage.getItem("avatar"),
      name: localStorage.getItem("name"),
      isPremium: localStorage.getItem("premStatus"),
    });
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/auth/login");
  };

  const getPremium = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(scrollDownAction());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary mb-4 shadow">
        <div className="container position-relative">
          <Link className="navbar-brand me-lg-3" to={"/students"}>
            <img
              className="navbar-brand-dark"
              src="../../assets/images/logo-white.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>

          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarCollapse"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item dropdown ms-lg-3">
                <div
                  className="nav-link dropdown-toggle pt-1 px-0"
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
                </div>
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
                    Profile
                  </Link>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to="/students/grades"
                  >
                    <svg
                      className="dropdown-icon text-gray-400 me-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      ></path>
                    </svg>
                    Grades
                  </Link>
                  <div className="dropdown-item d-flex align-items-center">
                    {localStorage.getItem("premStatus") === "true" ? (
                      <>
                        <svg
                          className="dropdown-icon text-gray-400 me-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                          ></path>
                        </svg>
                        Premium User
                      </>
                    ) : (
                      <>
                        <svg
                          className="dropdown-icon text-gray-400 me-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
                          ></path>
                        </svg>
                        Free User
                      </>
                    )}
                  </div>
                  {localStorage.getItem("premStatus") === "true" ? null : (
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      onClick={getPremium}
                    >
                      <svg
                        className="dropdown-icon text-gray-400 me-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        ></path>
                      </svg>
                      Get Premium
                    </Link>
                  )}

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
