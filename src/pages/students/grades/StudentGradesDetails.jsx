import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionReadGradeDetail } from "../../../actions/actionCreators";

const StudentGradesDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { answers } = useSelector((state) => state.readGradeDetails);

  useEffect(() => {
    dispatch(actionReadGradeDetail(id));
  }, []);

  console.log(answers);
  return (
    <>
      {answers?.map((ans) => (
        <div className=" mb-4">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5>{ans?.Question?.question}</h5>
              <hr />
              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0 rounded">
                  <thead>
                    <tr>
                      <td className="fw-bold">Your Answer</td>
                      <td style={{ fontWeight: "bold" }}>
                        {ans?.Answer?.answer}
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Verdict</td>
                      <td style={{ fontWeight: "bold" }}>
                        <span
                          className={`badge bg-${
                            ans?.Answer?.isCorrect ? "success" : "danger"
                          }`}
                        >
                          {ans?.Answer?.isCorrect ? "Correct" : "Wrong"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Explanation</td>
                      <td>{ans?.Answer?.explanation}</td>
                    </tr>
                    <tr></tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StudentGradesDetails;
