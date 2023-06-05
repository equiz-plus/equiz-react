/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";

export default function ExamForm({
  formHandler,
  submitForm,
  isLoading,
  categories,
  examData,
}) {
  const { id } = useParams();

  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <Link
              to="/admin/exams"
              className="btn btn-md btn-primary border-0 shadow mb-3"
              type="button"
            >
              <i className="fa fa-long-arrow-alt-left me-2"></i> Cancel
            </Link>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5>
                  <svg
                    className="icon icon-md-3 me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                    ></path>
                  </svg>
                  {id ? "Edit Exam" : "Create Exam"}
                </h5>
                <hr />
                <form method="post" onSubmit={submitForm}>
                  <div className="mb-4">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Exam title"
                      name="title"
                      onChange={formHandler}
                      defaultValue={examData?.title}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Category</label>
                        <select
                          className="form-select"
                          name="CategoryId"
                          onChange={formHandler}
                          value={examData?.CategoryId}
                        >
                          <option selected disabled>
                            --Category--
                          </option>
                          {categories?.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Organization</label>
                        <select
                          className="form-select"
                          name="OrganizationId"
                          onChange={formHandler}
                          defaultValue={examData?.OrganizationId}
                        >
                          <option>Hacktiv8</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="my-4">
                    <label>Exam Description</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter your message..."
                      id="textarea"
                      rows="4"
                      name="description"
                      onChange={formHandler}
                      defaultValue={examData?.description}
                    ></textarea>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Duration (minutes)</label>
                        <input
                          type="number"
                          min="1"
                          className="form-control"
                          placeholder="Duration"
                          name="duration"
                          onChange={formHandler}
                          defaultValue={examData?.duration}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Total Questions</label>
                        <input
                          type="number"
                          min="1"
                          className="form-control"
                          placeholder="Enter total question"
                          name="totalQuestions"
                          onChange={formHandler}
                          defaultValue={examData?.totalQuestions}
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
