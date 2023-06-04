/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Pagination({ totalPages }) {
  return (
    <>
      <nav>
        <ul className="pagination pagination-sm justify-content-end mb-0 mt-4">
          <li className="page-item">
            <a className="page-link" href="/">
              Prev
            </a>
          </li>

          {[...Array(totalPages)].map((page, index) => (
            <li className="page-item" key={index}>
              <Link className="page-link" to={`?page=` + (index + 1)}>
                {index + 1}
              </Link>
            </li>
          ))}

          <li className="page-item">
            <a className="page-link" href="/">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
