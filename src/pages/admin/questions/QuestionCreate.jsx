import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  actionCreateQuestions,
  actionReadCategories,
} from "../../../actions/actionCreators";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../../../actions/actionTypes";

function QuestionCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.readCategories);

  const [questionInput, setQuestionInput] = useState({});

  //GET CATEGORY
  useEffect(() => {
    dispatch(actionReadCategories());
  }, []);

  //CREATE QUESTION
  const [question, setQuestion] = useState({
    question: null,
    CategoryId: null,
    correctAnswer: null,
    answerA: null,
    answerB: null,
    answerC: null,
    answerD: null,
    explanationA: null,
    explanationB: null,
    explanationC: null,
    explanationD: null,
  });

  const formHandler = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(actionCreateQuestions(question));
  };

  const { isLoading, isSuccess, isError, newQuestion, CategoryId, errorMsg } =
    useSelector((state) => state.createQuestions);

  useEffect(() => {
    if (isError) {
      toast.error(errorMsg);
      dispatch({ type: CLEAR_STATE });
    } else if (isSuccess) {
      toast.success(`New question successfully created`);
      navigate("/admin/questions");
    }
  }, [isError, isSuccess]);

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
                <form onSubmit={submitForm}>
                  <div className="my-4">
                    <label>Questions</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter your question..."
                      id="textarea"
                      rows="3"
                      name="question"
                      onChange={formHandler}
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Answer A</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer..."
                      id="textarea"
                      rows="2"
                      name="answerA"
                      onChange={formHandler}
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Explanation Answer A</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer explanation..."
                      id="textarea"
                      rows="2"
                      name="explanationA"
                      onChange={formHandler}
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Answer B</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer..."
                      id="textarea"
                      rows="2"
                      name="answerB"
                      onChange={formHandler}
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Explanation Answer B</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer explanation..."
                      id="textarea"
                      rows="2"
                      name="explanationB"
                      onChange={formHandler}
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Answer C</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer..."
                      id="textarea"
                      rows="2"
                      name="answerC"
                      onChange={formHandler}
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Explanation Answer C</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer explanation..."
                      id="textarea"
                      rows="2"
                      name="explanationC"
                      onChange={formHandler}
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Answer D</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer..."
                      id="textarea"
                      rows="2"
                      name="answerD"
                      onChange={formHandler}
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <label>Explanation D</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter the answer explanation..."
                      id="textarea"
                      rows="2"
                      name="explanationD"
                      onChange={formHandler}
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Correct Answer</label>
                        <select
                          className="form-control"
                          name="correctAnswer"
                          onChange={formHandler}
                        >
                          <option value="">Select True Answer</option>
                          <option value="1">A</option>
                          <option value="2">B</option>
                          <option value="3">C</option>
                          <option value="4">D</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Category</label>
                        <select
                          className="form-select"
                          name="CategoryId"
                          onChange={formHandler}
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
