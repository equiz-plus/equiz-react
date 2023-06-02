import { Outlet } from "react-router-dom";

function StudentLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary mb-4 shadow">
        <div className="container position-relative">
          <a className="navbar-brand me-lg-3" href="/student/dashboard">
            <img
              className="navbar-brand-dark"
              src="../../public/assets/images/logo.png"
              style={{ width: "150px" }}
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
            <form className="d-flex">
              <a
                href="/logout"
                method="POST"
                className="btn btn-secondary shadow button"
              >
                LOGOUT
              </a>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default StudentLayout;
