/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  actionCreateExamSchedule,
  actionReadExams,
} from "../../../actions/actionCreators";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../../../actions/actionTypes";
import ScheduleForm from "../../../components/scheduleForm";

const ExamScheduleCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actionReadExams());
  }, []);

  const { exams, totalPages } = useSelector((state) => state.readExams);

  // const [noScheduleExams, setNoScheduleExams] = useState([]);
  // useEffect(() => {
  //   setNoScheduleExams(exams?.filter((exam) => exam.ExamSchedules.length != 0));
  // }, [exams]);

  // INPUT
  const [scheduleInput, setScheduleInput] = useState({
    ExamId: null,
    startingDate: null,
    endDate: null,
  });

  const inputHandler = (e) => {
    setScheduleInput({
      ...scheduleInput,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(actionCreateExamSchedule(scheduleInput));
  };

  const { isSuccess, isError, errorMessage, isLoading } = useSelector(
    (state) => state.createSchedule
  );

  useEffect(() => {
    if (isSuccess) {
      navigate("/admin/exams/schedule");
      toast.success("Exam schedule created successfully!");
    } else if (isError) {
      toast.error(errorMessage);
      dispatch({ type: CLEAR_STATE });
      dispatch(actionReadExams());
    }
  }, [isSuccess, isError]);

  // CLEAR STATE WHEN UNMOUNTED
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  return (
    <>
      <ScheduleForm
        submitHandler={submitHandler}
        inputHandler={inputHandler}
        exams={exams}
      />
    </>
  );
};

export default ExamScheduleCreate;
