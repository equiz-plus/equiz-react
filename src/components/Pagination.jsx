/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

function Pagination({ totalPages }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  let page = searchParams.get("page");

  if (!page) {
    page = 1;
  }

  return (
    <>
      <nav>
        <ul className="pagination pagination-sm justify-content-end mb-0 mt-4">
          <li className="page-item">
            <Link
              className="page-link"
              to={+page === 1 ? `?page=${page}` : `?page=${+page - 1}`}
            >
              Prev
            </Link>
          </li>

          {[...Array(totalPages)].map((page, index) => (
            <li className="page-item" key={index}>
              <Link className="page-link" to={`?page=` + (index + 1)}>
                {index + 1}
              </Link>
            </li>
          ))}

          <li className="page-item">
            <Link className="page-link" to={`?page=` + (+page + 1)}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
