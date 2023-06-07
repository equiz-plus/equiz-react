
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { actionReadUserDetail } from "../actions/actionCreators";


function Navbar() {
  const navigate = useNavigate();

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
      isPremium: localStorage.getItem("isPremium"),
    });
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <>
      <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
        <div className="container-fluid px-0">
          <div
            className="d-flex justify-content-between w-100"
            id="navbarSupportedContent"
          >
            <div className="d-flex align-items-center"></div>
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

                      src={localStorage.getItem("avatar")}
                    />
                    <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                      <span className="mb-0 font-small fw-bold text-gray-900">
                        {localStorage.getItem("name")}
                      </span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1 border-0 shadow">
                  <Link
                    className="dropdown-item d-flex align-items-center button"
                    to="/admin/profile"
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
    </>
  );
}

export default Navbar;
