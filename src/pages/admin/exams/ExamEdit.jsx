import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  actionDetailExam,
  actionEditExam,
  actionReadCategories,
} from "../../../actions/actionCreators";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../../../actions/actionTypes";
import ExamForm from "../../../components/ExamForm";

function ExamEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // GET CATEGORIES & EXAM DETAIL
  useEffect(() => {
    dispatch(actionReadCategories());
    dispatch(actionDetailExam(id));
  }, []);

  const { categories } = useSelector((state) => state.readCategories);
  const { examDetail } = useSelector((state) => state.detailExam);

  const [examInput, setExamInput] = useState({
    title: null,
    description: null,
    totalQuestions: null,
    duration: null,
    CategoryId: null,
    OrganizationId: null,
  });

  useEffect(() => {
    setExamInput(examDetail);
  }, [examDetail]);

  // EDIT
  const formHandler = (e) => {
    setExamInput({
      ...examInput,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(actionEditExam(examInput, id));
  };

  const { isSuccess, isError, isLoading, errorMessage } = useSelector(
    (state) => state.editExam
  );

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    } else if (isSuccess) {
      toast.success(`Exam edited`);
      navigate("/admin/exams");
    }
  }, [isError, isSuccess]);

  // CLEAR STATE WHEN UNMOUNTED
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  return (
    <>
      <ExamForm
        formHandler={formHandler}
        submitForm={submitForm}
        isLoading={isLoading}
        categories={categories}
        examData={examInput}
      />
    </>
  );
}

export default ExamEdit;
