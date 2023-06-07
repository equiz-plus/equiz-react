import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_STATE } from "../../../actions/actionTypes";
import {
  actionEditExamSchedule,
  actionGetScheduleDetail,
} from "../../../actions/actionCreators";
import ScheduleForm from "../../../components/scheduleForm";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ExamScheduleCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(actionGetScheduleDetail(id));
  }, []);

  const [scheduleInput, setScheduleInput] = useState({
    ExamId: null,
    startingDate: null,
    endDate: null,
  });

  const { scheduleDetail, isSuccess, isError, errorMessage } = useSelector(
    (state) => state.scheduleDetail
  );

  useEffect(() => {
    if (isSuccess) {
      setScheduleInput(scheduleDetail);
    } else {
      toast.error(errorMessage);
    }
    console.log(scheduleDetail, "<<<<<");
  }, [isSuccess, isError]);

  // INPUT
  const inputHandler = (e) => {
    setScheduleInput({
      ...scheduleInput,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(actionEditExamSchedule(scheduleInput, id));
  };

  const {
    isSuccess: successEdit,
    isError: errorEdit,
    errorMessage: errorEditMessage,
  } = useSelector((state) => state.editSchedule);

  useEffect(() => {
    if (successEdit) {
      navigate("/admin/exams/schedule");
      toast.success("Exam schedule edited successfully!");
    } else if (errorEdit) {
      toast.error(errorEditMessage);
      dispatch({ type: CLEAR_STATE });
      dispatch(actionEditExamSchedule(id));
    }
  }, [successEdit, errorEdit]);

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
        scheduleDetail={scheduleDetail}
      />
    </>
  );
};

export default ExamScheduleCreate;
