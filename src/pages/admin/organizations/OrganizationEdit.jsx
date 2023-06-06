import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  actionReadOrgById,
  actionEditOrganization,
} from "../../../actions/actionCreators";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../../../actions/actionTypes";
import OrganizationForm from "../../../components/OrganizationForm";

function OrganizationEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // GET CATEGORIES & EXAM DETAIL
  const { organizationDetail } = useSelector((state) => state.readOrgById);
  useEffect(() => {
    dispatch(actionReadOrgById(id));
    console.log(organizationDetail);
  }, []);

  const [organizationInput, setOrganizationInput] = useState({
    name: null,
    address: null,
    logo: null,
    pic: null,
    sign: null,
    prefix: null,
  });

  useEffect(() => {
    setOrganizationInput(organizationDetail);
  }, [organizationDetail]);

  // EDIT
  const formHandler = (e) => {
    setOrganizationInput({
      ...organizationInput,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(actionEditOrganization(organizationInput, id));
  };

  const { isSuccess, isError, isLoading, errorMessage } = useSelector(
    (state) => state.editOrganizations
  );

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    } else if (isSuccess) {
      toast.success(`Organization edited`);
      navigate("/admin/organizations");
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
      <OrganizationForm
        formHandler={formHandler}
        submitForm={submitForm}
        isLoading={isLoading}
        organizationData={organizationInput}
      />
    </>
  );
}

export default OrganizationEdit;
