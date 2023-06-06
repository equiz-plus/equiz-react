import { Link } from "react-router-dom";

function QuestionCreate() {
  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <Link
              to="/admin/questions"
              className="btn btn-md btn-primary border-0 shadow mb-3"
              type="button"
            >
              <i className="fa fa-long-arrow-alt-left me-2"></i> Back
            </Link>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5>Add new question</h5>
                <hr />
                <form>
                  <div className="my-4">
                    <label>Questions</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter your message..."
                      id="textarea"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Answer A</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer..."
                      id="textarea"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Explanation Answer A</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer explanation..."
                      id="textarea"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Answer B</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer..."
                      id="textarea"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Explanation Answer B</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer explanation..."
                      id="textarea"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Answer C</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer..."
                      id="textarea"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Explanation Answer C</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer explanation..."
                      id="textarea"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Answer D</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer..."
                      id="textarea"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Explanation D</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer explanation..."
                      id="textarea"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Correct Answer</label>
                        <select className="form-control" name="category">
                          <option value="">Select True Answer</option>
                          <option value="1">A</option>
                          <option value="2">B</option>
                          <option value="3">C</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Category</label>
                        <select className="form-control" name="category">
                          <option value="">Select category</option>
                          <option value="1">Category 1</option>
                          <option value="2">Category 2</option>
                          <option value="3">Category 3</option>
                        </select>
                      </div>
                    </div>
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

export default QuestionCreate;
