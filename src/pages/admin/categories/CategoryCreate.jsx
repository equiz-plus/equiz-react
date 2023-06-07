import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../../../actions/actionTypes";
import { actionCreateCategory } from "../../../actions/actionCreators";

function CategoryCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newCategories, setNewCategories] = useState({
    name: null,
  });

  const formHandler = (e) => {
    setNewCategories({
      ...newCategories,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(actionCreateCategory(newCategories));
  };

  const { isSuccess, isError, isLoading, title, errorMessage } = useSelector(
    (state) => state.createCategories
  );

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch({ type: CLEAR_STATE });
    } else if (isSuccess) {
      toast.success(`Categories ${name} created`);
      navigate("/admin/categories");
    }
  }, [isError, isSuccess]);
  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <Link
              to={"/admin/categories"}
              className="btn btn-md btn-primary border-0 shadow mb-3"
              type="button"
            >
              <i className="fa fa-long-arrow-alt-left me-2"></i> Back
            </Link>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5>
                  <i className="fa fa-bookmark"></i> Add New Category
                </h5>
                <hr />
                <form onSubmit={submitForm}>
                  <div className="mb-4">
                    <label>Category name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Insert new category.."
                      name="name"
                      onChange={formHandler}
                    />
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
}

export default CategoryCreate;
